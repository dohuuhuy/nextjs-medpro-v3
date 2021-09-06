import * as ac from '@actionStore/rootAction'
import { client } from '@config/medproSDK'
import { AppState, HosptailTypes } from 'store/interface'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'

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

function* getFeatureByPartner({ partnerid, typeReser }: any) {
  try {
    const rs: AxiosResponse = yield client.getFeatureByPartner({
      partnerid
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
    const appid: string = yield select(
      (state: AppState) => state.totalDataReducer.appId
    )

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
    HosptailTypes.BookingTree.BOOKING_TREE_REQUEST as any,
    getBookingTree
  )
}

const hospitalSagas = function* root() {
  yield all([
    fork(WatchGetHospitalDetails),
    fork(WatchGetFeatureByPartner),
    fork(WatchGetListHospital),
    fork(WatcherGetBookingTree)
  ])
}
export default hospitalSagas
