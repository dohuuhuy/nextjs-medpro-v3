import { client } from '@config/medproSDK'
import { huyi } from '@src/utils/clog'
import { openToast } from '@src/utils/Notification'
import * as ac from '@store/actionStore'
import {
  AppState,
  HospitalState,
  HosptailTypes,
  TotalDataState,
  UserState
} from '@store/interface'
import { urlJson } from '@utils/contants'
import { fetcher } from '@utils/func'
import { AxiosResponse } from 'axios'
import { filter, get } from 'lodash'
import moment from 'moment'
import router from 'next/router'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'

function* getHospitalDetails() {
  try {
    yield put(ac.getListPartners())
    client.getAllPaymentMethod
  } catch (error) {
    console.error(error)
  }
}

function* watcher_getHospitalDetails() {
  yield takeLatest(
    HosptailTypes.Information.Information_REQUEST,
    getHospitalDetails
  )
}

function* getFeatureByPartner({ partnerId, typeReser }: any) {
  try {
    const rs: AxiosResponse = yield client.getFeatureByPartner({
      partnerid: partnerId,
      version: '2'
    })

    switch (typeReser) {
      case 'partner':
        yield put(ac.FeatureByPartnerSuccess(rs?.data))
        break
      case 'app':
        yield put(ac.FeatureByAppSuccess(rs?.data))
        break
      default:
        break
    }
  } catch (error) {
    console.error(error)
  }
}

function* watcher_getFeatureByPartner() {
  yield takeLatest(HosptailTypes.Feature.Feature_REQUEST, getFeatureByPartner)
}

function* getListHospital() {
  try {
    const appid: string = yield select((state: AppState) => state.total.appId)

    const response: AxiosResponse = yield client.getHospitalListByAppId({
      appid
    })
    const { data } = response
    yield put(ac.ListHospitalRequestSuccess(data))
  } catch (error) {
    console.error(error)
  }
}

function* watcher_getListHospital() {
  yield takeLatest(
    HosptailTypes.ListHospital.ListHospital_REQUEST,
    getListHospital
  )
}

function* getBookingTree({ partnerId }: any) {
  try {
    yield client.setPartner(partnerId)
    yield put(ac.setLoading())

    const response: AxiosResponse = yield client.getBookingTreeDynamic({
      treeId: 'DATE'
    })

    yield put(ac.getBookingTreeSuccess(response.data))
    yield put(ac.setLoading(false))
  } catch (error) {
    yield put(ac.setLoading(false))
    // const e = get(error, 'response.data', '')

    yield put(ac.getBookingTreeSuccess(null))
    huyi({ name: 'getBookingTree', child: error, type: 'error' })
  }
}

function* watcher_getBookingTree() {
  yield takeLatest(
    HosptailTypes.BookingTree.BOOKING_TREE_REQUEST,
    getBookingTree
  )
}

function* getHeader({}: any) {
  try {
    const response: AxiosResponse = yield fetcher(urlJson.urlHeader)

    yield put(ac.getHeaderSuccess(response))
  } catch (error) {
    huyi({ name: 'getHeader', child: error, type: 'error' })
  }
}

function* watcher_getHeader() {
  yield takeLatest(HosptailTypes.Header.Header_REQUEST, getHeader)
}

function* getFooter({}: any) {
  try {
    const response: AxiosResponse = yield fetcher(urlJson.urlFooter)

    yield put(ac.getFooterSuccess(response))
  } catch (error) {
    huyi({ name: 'getFooter', child: error, type: 'error' })
  }
}

function* watcher_getFooter() {
  yield takeLatest(HosptailTypes.Footer.Footer_REQUEST, getFooter)
}

function* getBanners({}: any) {
  try {
    const response: AxiosResponse = yield fetcher(urlJson.urlBanners)

    yield put(ac.getBannersSuccess(response))
  } catch (error) {
    huyi({ name: 'getBanners', child: error, type: 'error' })
  }
}

function* watcher_getBanners() {
  yield takeLatest(HosptailTypes.Banners.Banners_REQUEST, getBanners)
}

function* getbookingCurNode({ schedules }: any) {
  try {
    const hos: HospitalState = yield select((state: AppState) => state.hospital)
    const response: AxiosResponse = yield client.getBookingTreeCurrentNode(
      {
        treeId: 'DATE',
        serviceId: schedules?.service?.selected.id || '',
        doctorId: schedules?.doctor?.selected.id || '',
        subjectId: schedules?.subject?.selected.id || ''
      },
      { partnerid: hos.partnerId }
    )

    yield put(ac.getbookingCurSuccess(response.data))
  } catch (error) {
    console.log('error getbookingCurNode :>> ', error)
  }
}

function* watcher_getbookingCurNode() {
  yield takeLatest(
    HosptailTypes.BookingTree.CurrentBooking_Request,
    getbookingCurNode
  )
}

const handlePriceAddOnSV = (schedule: any) => {
  const addonServicesWithIdTrue =
    schedule?.service?.other?.addonServicesWithIdTrue
  const addonServicesFromSelected = schedule?.service?.selected.addonServices

  if (addonServicesWithIdTrue?.length > 0) {
    const fillterId_True = filter(addonServicesFromSelected, (item) => {
      return addonServicesWithIdTrue.includes(item.id)
    })

    const priceOfAddOn = fillterId_True.reduce((init, { price }) => {
      return init + price
    }, 0)

    return priceOfAddOn
  }
  return 0
}

function* getAllPayment() {
  try {
    yield put(ac.setLoading())
    const hos: HospitalState = yield select((state: AppState) => state.hospital)
    const user: UserState = yield select((state: AppState) => state.user)

    const response: AxiosResponse = yield client.getAllPaymentMethod(
      {
        // bookingId: user.billInfo?.bookingInfo?.id,
        patientId: user.selectedPatient.id,
        price:
          Number(hos.schedule?.service?.selected.price) +
          handlePriceAddOnSV(hos.schedule),
        groupId: 1,
        treeId: hos.treeId,
        serviceId: hos.schedule?.service?.selected.id,
        subjectId: hos.schedule?.subject?.selected.id,
        doctorId: hos.schedule?.doctor?.selected.id,
        bookingDate: moment(
          hos.schedule.time?.selected?.chonNgay.date
        ).toISOString(),
        addonServices: hos?.schedule?.service?.other?.addonServicesWithIdTrue // chưa làm tới
      },
      {
        partnerid: hos.partnerId,
        token: user.userInfo.token
      }
    )

    yield put(ac.getAllPaymentSuccess(response.data))
    yield put(ac.setLoading(false))
  } catch (error) {
    yield put(ac.setLoading(false))

    huyi({ name: 'getAllPayment', child: error, type: 'error' })
  }
}

function* watcher_getAllPayment() {
  yield takeLatest(HosptailTypes.Payment.Payment_REQUEST, getAllPayment)
}

function* reserveBooking() {
  try {
    yield put(ac.setLoading())
    const hos: HospitalState = yield select((state: AppState) => state.hospital)
    const user: UserState = yield select((state: AppState) => state.user)

    const date = hos.schedule?.time.selected?.chonNgay.date
    const chonGio = hos.schedule?.time.selected?.chonGio
    const formatDate = moment(date).format('YYYY-MM-DD')
    const startTime = chonGio.startTime
    const endTime = chonGio.endTime
    const timeSlotId = chonGio.timeId
    const maxSlot = chonGio.maxSlot

    const dateString = moment(formatDate + ' ' + startTime).toISOString() || ''
    const startTimeString =
      moment(formatDate + ' ' + startTime).toISOString() || ''
    const endTimeString = moment(formatDate + ' ' + endTime).toISOString() || ''

    const postData = {
      // thông tin payment
      gatewayId: hos.selectedPaymentFee.gatewayId,
      subTotal: hos.paymentFee?.subTotal,
      totalFee: hos.paymentFee?.totalFee,
      amount: hos.paymentFee?.grandTotal,
      methodId: hos.selectedPaymentFee?.gatewayId || 'NO_PAYMENT',
      paymentTypeDetail: hos.selectedPaymentFee?.code || 'NO_PAYMENT',

      // thông tin cá nhân
      patientId: user.selectedPatient.id,
      patientProfileId: '', // không có
      hasInsuranceCode: hos.schedule?.service?.other?.selectedBHYT,
      insuranceCode: user.selectedPatient?.insuranceCode || 'DN4798622441759',
      insuranceChoice: '',
      insuranceTransferCode: '', // không có
      referralCode: '', // không có
      phone: user.selectedPatient?.mobile,

      // thông tin đặt khám
      serviceId: hos.schedule?.service?.selected.id,
      subjectId: hos.schedule?.subject?.selected.id,
      doctorId: hos.schedule?.doctor?.selected.id,
      roomId: '',
      insuranceFileUrl: '', // chưa làm tới
      filterCheckData: [], // chưa làm tới
      addonServices: hos?.schedule?.service?.other?.addonServicesWithIdTrue, // chưa làm tới

      // thông tin thời gian
      bookingSlotId: timeSlotId + '_' + hos.partnerId,
      startTimeString: dateString,
      startTime: startTimeString,
      endTime: endTimeString,
      maxSlot,

      // thông tin máy móc
      treeId: hos.treeId, // luồng đi
      platform: 'pc',
      cbWebView: 1,
      groupId: 1,
      idReExam: '', // chưa biết

      redirectUrl: `${window.location.origin}/chi-tiet-phieu-kham`
    }

    const response: AxiosResponse = yield client.reserveBooking(postData, {
      partnerid: hos.partnerId,
      token: user.userInfo.token
    })

    const { data } = response

    if (data.isGateway === 1) {
      // đi tiếp qua thanh toán
      yield put(ac.getReserveBookingSuccess(response.data))

      data.qrCodeUrl && (window.location.href = data.qrCodeUrl)
    } else if (data.isGateway === 0) {
      // trả về phiếu khám
      if (postData.methodId === 'SHARE_PAYMENT') {
        router.push(`/chi-tiet-phieu-kham?mpTransaction=${data.transactionId}`)
      } else {
        router.push(`/chi-tiet-phieu-kham?mpTransaction=${data.transactionId}`)

        yield put(ac.getReserveBookingSuccess(response.data))
      }
    }

    yield put(ac.setLoading(false))
  } catch (error) {
    yield put(ac.setLoading(false))
    huyi({ name: 'reserveBooking', child: error, type: 'error' })
  }
}

function* watcher_reserveBooking() {
  yield takeLatest(
    HosptailTypes.ReserveBooking.ReserveBooking_REQUEST,
    reserveBooking
  )
}

function* cancelBooking({ id, partnerId }: any) {
  try {
    // const total: TotalDataState = yield select((state: AppState) => state.total)
    const user: UserState = yield select((state: AppState) => state.user)

    const response: AxiosResponse = yield client.cancelBooking(
      { id },
      {
        partnerid: partnerId,
        token: user.userInfo.token
      }
    )

    response.data &&
      openToast({
        type: 'success',
        message: 'Thông báo !',
        description: 'Bạn đã hủy phiếu khám thành công!',
        duration: 60
      })

    yield put(ac.cancelBookingSuccess(response.data))
    yield put(ac.getNoti())

    yield response.data.transactionId &&
      put(ac.getBillInfo(response.data.transactionId))
  } catch (error) {
    huyi({ name: 'cancelBooking', child: error, type: 'error' })
  }
}

function* watcher_cancelBooking() {
  yield takeLatest(
    HosptailTypes.CancelBooking.CancelBooking_REQUEST,
    cancelBooking
  )
}

function* getHistoryPayment() {
  try {
    const total: TotalDataState = yield select((state: AppState) => state.total)
    const user: UserState = yield select((state: AppState) => state.user)

    const response: AxiosResponse = yield client.paymentFeeTracking({
      partnerid: total.partnerId,
      token: user.userInfo.token
    })

    yield put(ac.getHistoryPaymentSuccess(response.data))
  } catch (error) {
    const e = get(error, 'response.data', '')
    yield put(ac.getHistoryPaymentSuccess(e))
    huyi({ name: 'HistoryPayment', child: error, type: 'error' })
  }
}

function* watcher_getHistoryPayment() {
  yield takeLatest(
    HosptailTypes.HistoryPayment.HistoryPayment_REQUEST,
    getHistoryPayment
  )
}

const hospitalSagas = function* root() {
  yield all([
    fork(watcher_getHospitalDetails),
    fork(watcher_getFeatureByPartner),
    fork(watcher_getListHospital),

    fork(watcher_getHeader),
    fork(watcher_getBanners),
    fork(watcher_getFooter),

    fork(watcher_getBookingTree),
    fork(watcher_getbookingCurNode),
    fork(watcher_getAllPayment),
    fork(watcher_reserveBooking),
    fork(watcher_cancelBooking),
    fork(watcher_getHistoryPayment)
  ])
}
export default hospitalSagas
