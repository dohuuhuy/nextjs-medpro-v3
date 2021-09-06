import { AppState, UserTypes } from 'store/interface'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { client } from '@config/medproSDK'
import * as ac from '@actionStore/rootAction'

function* ListPatientRequest() {
  try {
    const token: string = yield select(
      (state: AppState) => state.userReducer.userInfo.token
    )

    const response: AxiosResponse = yield client.getPatientsByUserIdV2({
      token
    })

    yield put(ac.ListPatientRequestSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* ListPatientRequestWatcher() {
  yield takeLatest(UserTypes.Patient.LIST_PATIENT_REQUEST, ListPatientRequest)
}

function* GetBookingByUser() {
  try {
    const token: string = yield select(
      (state: AppState) => state.userReducer.userInfo.token
    )

    const response: AxiosResponse = yield client.getAllBookingByUserId({
      token
    })

    yield put(ac.GetBookingByUserSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* GetBookingByUserWatcher() {
  yield takeLatest(
    UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST,
    GetBookingByUser
  )
}

const userSagas = function* root() {
  yield all([fork(ListPatientRequestWatcher), fork(GetBookingByUserWatcher)])
}
export default userSagas
