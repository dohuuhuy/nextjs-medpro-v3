import { client } from '@config/medproSDK'
import * as ac from '@store/actionStore'
import {
  AppState,
  HospitalState,
  HosptailTypes,
  UserState
} from '@store/interface'
import { urlJson } from '@utils/contants'
import { fetcher } from '@utils/func'
import { AxiosResponse } from 'axios'
import moment from 'moment'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { huyi } from './../../../utils/clog'
import {} from './../totalData/interface/initialState'

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
    HosptailTypes.Information.INFORMATION_REQUEST,
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
  yield takeLatest(HosptailTypes.Feature.FEATURE_REQUEST, getFeatureByPartner)
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
    HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST,
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
    console.log(error)
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
    console.log(error)
    huyi({ name: 'getBanners', child: error, type: 'error' })
  }
}

function* watcher_getBanners() {
  yield takeLatest(HosptailTypes.Banners.Banners_REQUEST, getBanners)
}

function* getbookingCurNode({ schedules }: any) {
  try {
    yield put(ac.setLoading())
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
    yield put(ac.setLoading(false))
  } catch (error) {
    yield put(ac.setLoading(false))
    console.log('error getbookingCurNode :>> ', error)
  }
}

function* watcher_getbookingCurNode() {
  yield takeLatest(
    HosptailTypes.BookingTree.CurrentBooking_Request,
    getbookingCurNode
  )
}

function* getAllPayment() {
  try {
    yield put(ac.setLoading())
    const hos: HospitalState = yield select((state: AppState) => state.hospital)
    const user: UserState = yield select((state: AppState) => state.user)
    /*     const total: TotalDataState = yield select((state: AppState) => state.total)
     */
    const response: AxiosResponse = yield client.getAllPaymentMethod(
      {
        bookingId: 'undefined',
        patientId: user.selectedPatient.id,
        price: Number(hos.schedule?.service?.selected.price),
        groupId: 1,
        treeId: 'DATE',
        serviceId: hos.schedule?.service?.selected.id,
        subjectId: hos.schedule?.subject?.selected.id,
        roomId: '',
        doctorId: hos.schedule?.doctor?.selected.id,
        bookingDate: moment(
          hos.schedule.time?.selected?.chonNgay.date
        ).toISOString()
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
  yield takeLatest(HosptailTypes.Payment.PAYMENT_REQUEST, getAllPayment)
}

const hospitalSagas = function* root() {
  yield all([
    fork(watcher_getHospitalDetails),
    fork(watcher_getFeatureByPartner),
    fork(watcher_getListHospital),
    fork(watcher_getBookingTree),
    fork(watcher_getHeader),
    fork(watcher_getBanners),
    fork(watcher_getFooter),
    fork(watcher_getbookingCurNode),
    fork(watcher_getAllPayment)
  ])
}
export default hospitalSagas
