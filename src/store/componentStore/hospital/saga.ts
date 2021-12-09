import { huyi } from './../../../utils/clog'
import { client } from '@config/medproSDK'
import { AppState, HospitalState, HosptailTypes } from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { fetcher } from '@utils/func'
import { urlBanners, urlFooter, urlHeader } from '@utils/contants'
import * as ac from '@store/actionStore'

function* getHospitalDetails() {
  try {
    yield put(ac.getListPartners())
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
    const response: AxiosResponse = yield fetcher(urlHeader)

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
    const response: AxiosResponse = yield fetcher(urlFooter)

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
    const response: AxiosResponse = yield fetcher(urlBanners)

    yield put(ac.getBannersSuccess(response))
  } catch (error) {
    console.log(error)
    huyi({ name: 'getBanners', child: error, type: 'error' })
  }
}

function* watcher_getBanners() {
  yield takeLatest(HosptailTypes.Banners.Banners_REQUEST, getBanners)
}

function* getbookingCurNode({}: any) {
  try {
    const hos: HospitalState = yield select((state: AppState) => state.hospital)
    const schedule = hos.schedule

    const response: AxiosResponse = yield client.getBookingTreeCurrentNode(
      {
        treeId: 'DATE',
        serviceId: schedule?.service?.selected.id || '',
        doctorId: schedule?.doctor?.selected.id || '',
        subjectId: schedule?.subject?.selected.id || ''
      },
      { partnerid: hos.partnerId }
    )

    yield put(ac.getDemo({ bookingCurrent: response.data }))
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

const hospitalSagas = function* root() {
  yield all([
    fork(watcher_getHospitalDetails),
    fork(watcher_getFeatureByPartner),
    fork(watcher_getListHospital),
    fork(watcher_getBookingTree),
    fork(watcher_getHeader),
    fork(watcher_getBanners),
    fork(watcher_getFooter)
    // fork(watcher_getbookingCurNode)
  ])
}
export default hospitalSagas
