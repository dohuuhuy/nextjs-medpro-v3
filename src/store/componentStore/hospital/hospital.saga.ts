import { _DEVELOPMENT } from '@config/envs/env'
import { client } from '@config/medproSDK'
import { AppState, Hosptail_Types, totalData_Types } from '@store/interface'
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
      type: Hosptail_Types.Information.Information_REQUEST_SUCCESS,
      information: JSON_EXP
    })

    yield put({
      type: totalData_Types.ListPartners.SET_PartnerId,
      partnerId
    })

    yield put({
      type: Hosptail_Types.Feature.FeatureByPartner_REQUEST
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
      type: totalData_Types.ListPartners.SET_PartnerId,
      partnerId: ''
    })
    openToast({
      message,
      type: 'error',
      duration: 4.5
    })
  }
}

function* watch_getHospitalDetails() {
  yield takeEvery(
    Hosptail_Types.Information.Information_REQUEST,
    getHospitalDetails
  )
}

function* FeatureByPartner_REQUEST() {
  try {
    const partnerid: string = yield select(
      (state: AppState) => state.totalData_Reducer.partnerId
    )

    const respone: AxiosResponse = yield client.getFeatureByPartner({
      partnerid
    })

    const { data } = respone

    yield put({
      type: Hosptail_Types.Feature.FeatureByPartner_REQUEST_SUCCESS,
      feature_list: data
    })
  } catch (error) {}
}

function* watch_getFeatureByPartner() {
  yield takeLatest(
    Hosptail_Types.Feature.FeatureByPartner_REQUEST,
    FeatureByPartner_REQUEST
  )
}

function* getListHospital() {
  try {
    const appid: string = yield select(
      (state: AppState) => state.totalData_Reducer.appId
    )

    const response: AxiosResponse = yield client.getHospitalListByAppId({
      appid
    })
    const { data } = response
    yield put({
      type: Hosptail_Types.ListHospital.ListHospital_REQUEST_SUCCESS,
      listHospital: data
    })
  } catch (error) {}
}

function* watch_getListHospital() {
  yield takeLatest(
    Hosptail_Types.ListHospital.ListHospital_REQUEST,
    getListHospital
  )
}

const hospital_Sagas = function* root() {
  yield all([
    fork(watch_getHospitalDetails),
    fork(watch_getFeatureByPartner),
    fork(watch_getListHospital)
  ])
}
export default hospital_Sagas
