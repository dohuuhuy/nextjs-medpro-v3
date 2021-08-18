/* eslint-disable no-console */
import { ListPatientRequestSuccess } from './action'
import { AppState, UserTypes } from '@store/interface'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { client } from '@config/medproSDK'

function* ListPatientRequest() {
  try {
    const partnerid: string = yield select(
      (state: AppState) => state.totalDataReducer.partnerId
    )

    const token: string = yield select(
      (state: AppState) => state.userReducer.userInfo.token
    )
    const response: AxiosResponse = yield client.getPatientsByUserIdV2({
      partnerid,
      appid: partnerid,
      token: token
    })

    yield put(ListPatientRequestSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* ListPatientRequestWatcher() {
  yield takeLatest(UserTypes.Patient.LIST_PATIENT_REQUEST, ListPatientRequest)
}

const userSagas = function* root() {
  yield all([fork(ListPatientRequestWatcher)])
}
export default userSagas
