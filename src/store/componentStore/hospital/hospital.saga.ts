import { _DEVELOPMENT } from '@config/envs/env'
import { client } from '@config/medproSDK'
import { AppState, HosptailTypes, TotalDataTypes } from '@store/interface'
import { openToast } from '@utils/Notification'
import { AxiosResponse } from 'axios'
import { JSON_EXP } from 'json mẫu/bvtest'
import { get } from 'lodash'
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
    // const url =
    //   'http://103.48.193.51:10016/hospital/v2/full-details/' + partnerId

    // const res: AxiosResponse = yield call(getData, url)
    // console.error(res)

    yield put({
      type: HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS,
      information: JSON_EXP
    })

    yield put({
      type: TotalDataTypes.ListPartners.SET_PARTNERID,
      partnerId
    })

    yield put({
      type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST
    })

    if (_DEVELOPMENT) {
      openToast({
        message: 'Chọn bệnh viện thành công!',
        type: 'success',
        duration: 4.5
      })
    }
  } catch (error) {
    const { message } = get(error, 'response.data', '')

    yield put({
      type: TotalDataTypes.ListPartners.SET_PARTNERID,
      partnerId: ''
    })
    openToast({
      message,
      type: 'error',
      duration: 4.5
    })
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
    error
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
