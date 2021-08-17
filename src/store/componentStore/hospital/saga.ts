/* eslint-disable no-console */
import * as act from '@actionStore/rootAction'
import { _DEVELOPMENT } from '@config/envs/env'
import { client } from '@config/medproSDK'
import {
  AppState,
  FeatureByPartnerRequestSuccess,
  HosptailTypes,
  ListHospitalRequestSuccess,
  TotalDataTypes
} from '@store/interface'
import { check } from '@utils/checkValue'
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
    // 0. gọi Api lấy dữ liệu
    // const url =
    //   'http://103.48.193.51:10016/hospital/v2/full-details/' + partnerId

    // const res: AxiosResponse = yield call(getData, url)
    // console.error(res)

    //  1. lưu thông tin bệnh viện vào state
    yield put(act.InformationRequestSuccess(JSON_EXP))

    // 2. cập nhật lại partnerId bệnh viện
    yield put(act.SetParnerId(partnerId))

    // 3. lấy danh sách dịch vụ theo bệnh viện
    yield put(act.FeatureByPartnerRequest())

    // 4. lấy danh sách tỉnh thành
    yield put(act.getListCity())

    // 5. lấy hồ sơ bệnh nhân
    yield put(act.ListPatientRequest())

    // 5. thông báo chọn bệnh viện thành công ở Dev
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

    yield put(FeatureByPartnerRequestSuccess(data))
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
    yield put(ListHospitalRequestSuccess(data))
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
    const listPatient: string = yield select(
      (state: AppState) => state.userReducer.listPatient
    )

    const response: AxiosResponse = yield client.getBookingTreeDynamic(
      { treeId: 'DATE' },
      {
        partnerid,
        appid: partnerid
      }
    )
    yield put(act.getBookingTreeSuccess(response.data))

    if (check(listPatient)) {
      yield put(act.ListPatientRequest())
    }
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
