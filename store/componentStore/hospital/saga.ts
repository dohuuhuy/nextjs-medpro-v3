import * as ac from '@actionStore/rootAction'
import { client } from '@config/medproSDK'
import { AppState, HosptailTypes } from 'store/interface'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { fetcher } from '@utils/func'
import { urlBanners, urlFooter, urlHeader } from '@utils/contants'

function* getHospitalDetails() {
  try {
    yield put(ac.getListPartners())
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetHospitalDetails() {
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
      case 'parasitic':
        yield put(ac.FeatureByPartnerSuccess(rs?.data))
        break
      case 'normal':
        yield put(ac.FeatureByAppSuccess(rs?.data))
        break
      default:
        break
    }
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetFeatureByPartner() {
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

function* WatchGetListHospital() {
  yield takeLatest(
    HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST,
    getListHospital
  )
}

function* getBookingTree({ partnerid }: any) {
  try {
    const response: AxiosResponse = yield client.getBookingTreeDynamic(
      { treeId: 'DATE' },
      {
        partnerid,
        appid: partnerid
      }
    )
    yield put(ac.getBookingTreeSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* WatcherGetBookingTree() {
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
    console.log(error)
  }
}

function* WatcherGetHeader() {
  yield takeLatest(HosptailTypes.Header.Header_REQUEST, getHeader)
}

function* getFooter({}: any) {
  try {
    const response: AxiosResponse = yield fetcher(urlFooter)

    yield put(ac.getFooterSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

function* WatcherGetFooter() {
  yield takeLatest(HosptailTypes.Footer.Footer_REQUEST, getFooter)
}

function* getBanners({}: any) {
  try {
    const response: AxiosResponse = yield fetcher(urlBanners)

    yield put(ac.getBannersSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

function* WatcherGetBanners() {
  yield takeLatest(HosptailTypes.Banners.Banners_REQUEST, getBanners)
}

const hospitalSagas = function* root() {
  yield all([
    fork(WatchGetHospitalDetails),
    fork(WatchGetFeatureByPartner),
    fork(WatchGetListHospital),
    fork(WatcherGetBookingTree),
    fork(WatcherGetHeader),
    fork(WatcherGetBanners),
    fork(WatcherGetFooter)
  ])
}
export default hospitalSagas
