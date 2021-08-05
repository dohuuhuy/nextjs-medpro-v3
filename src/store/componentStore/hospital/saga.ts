/* eslint-disable no-console */
import { client } from '@config/medproSDK'
import { AppState, HosptailTypes, TotalDataTypes } from '@store/interface'
import { AxiosResponse } from 'axios'
import { JSON_EXP } from 'json mẫu/bvtest'
import {
  all,
  fork,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

function* getHospitalDetails({ partnerId }: any) {
  try {
    console.log('partnerId :>> ', partnerId)
    //  1. lưu thông tin bệnh viện vào state
    yield put({
      type: HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS,
      information: JSON_EXP
    })

    // 2. cập nhật lại partnerId bệnh viện
    yield put({
      type: TotalDataTypes.ListPartners.SET_PARTNERID,
      partnerId
    })
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetHospitalDetails() {
  yield takeEvery(
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

    yield put({
      type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS,
      listFeature: data
    })
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
    yield put({
      type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS,
      listHospital: data
    })
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

const hospitalSagas = function* root() {
  yield all([
    fork(WatchGetHospitalDetails),
    fork(WatchGetFeatureByPartner),
    fork(WatchGetListHospital)
  ])
}
export default hospitalSagas
