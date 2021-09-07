import * as ac from '@actionStore/rootAction'
import { client } from '@config/medproSDK'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { AppState, TotalDataState, UserState, UserTypes } from 'store/interface'

function* ListPatientRequest() {
  try {
    const user: UserState = yield select((state: AppState) => state.userReducer)

    const total: TotalDataState = yield select(
      (state: AppState) => state.totalDataReducer
    )

    const response: AxiosResponse = yield client.getPatientsByUserIdV2({
      token: user?.userInfo?.token,
      partnerid: total?.partnerId,
      appid: total?.appId
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
    const user: UserState = yield select((state: AppState) => state.userReducer)

    const total: TotalDataState = yield select(
      (state: AppState) => state.totalDataReducer
    )

    const response: AxiosResponse = yield client.getAllBookingByUserId({
      token: user?.userInfo?.token,
      partnerid: total?.partnerId,
      appid: total?.appId
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