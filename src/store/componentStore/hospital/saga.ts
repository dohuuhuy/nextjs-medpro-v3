import * as ac from '@actionStore/rootAction'
import { client } from '@config/medproSDK'
import { AppState, HosptailTypes } from '@store/interface'
import { findPartnerId } from '@utils/run_local_hospitals'
import { AxiosResponse } from 'axios'
import { JSON_EXP } from 'json mẫu/bvtest'

import { all, fork, put, select, takeLatest } from 'redux-saga/effects'

function* getHospitalDetails() {
  try {
    const listPartners: AppState = yield select(
      (state: AppState) => state.totalDataReducer.listPartners
    )

    // lấy danh sách partner bệnh viên
    yield put(ac.getListPartners())

    // tìm ra partnerid từ trong danh sách partner
    const partnerId = findPartnerId({ listPartners })

    console.log('partnerId :>> ', partnerId)

    // lưu thông tin bệnh viện vào state
    yield put(ac.InformationRequestSuccess(JSON_EXP))

    // cập nhật lại partnerId bệnh viện
    yield put(ac.SetParnerId(partnerId))

    // lấy danh sách dịch vụ theo bệnh viện
    yield put(ac.FeatureByPartnerRequest())

    // lấy danh sách tỉnh thành
    yield put(ac.getListCity())

    // lấy tin tức và sự kiện ở home
    yield put(ac.getNewsAndEvent())
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

function* getFeatureByPartner() {
  try {
    const partnerid: string = yield select(
      (state: AppState) => state.totalDataReducer.partnerId
    )

    const respone: AxiosResponse = yield client.getFeatureByPartner({
      partnerid
    })

    const { data } = respone

    console.log('data :>> ', data)

    yield put(ac.FeatureByPartnerRequestSuccess(data))
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetFeatureByPartner() {
  yield takeLatest(
    HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST,
    getFeatureByPartner
  )
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
