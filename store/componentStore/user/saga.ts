import { currentEnv } from '@config/envs/env'
import * as ac from '@actionStore/rootAction'
import { client } from '@config/medproSDK'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import { AppState, TotalDataState, UserState, UserTypes } from 'store/interface'

function* listPatientRequest() {
  try {
    const user: UserState = yield select((state: AppState) => state.user)
    const total: TotalDataState = yield select((state: AppState) => state.total)

    if (user.userInfo?.token) {
      const response: AxiosResponse = yield client.getPatientsByUserIdV2({
        token: user?.userInfo?.token,
        partnerid: total?.partnerId,
        appid: total?.appId
      })
      yield put(ac.listPatientRequestSuccess(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}

function* watcher_listPatientRequest() {
  yield takeLatest(UserTypes.Patient.LIST_PATIENT_REQUEST, listPatientRequest)
}

function* getBookingByUser() {
  try {
    const user: UserState = yield select((state: AppState) => state.user)

    const total: TotalDataState = yield select((state: AppState) => state.total)

    const response: AxiosResponse = yield client.getAllBookingByUserId({
      token: user?.userInfo?.token,
      partnerid: total?.partnerId,
      appid: total?.appId
    })

    yield put(ac.getBookingByUserSuccess(response.data))
  } catch (error) {
    console.log('error getBookingByUser :>> ', error)
  }
}

function* watcher_getBookingByUser() {
  yield takeLatest(
    UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST,
    getBookingByUser
  )
}

function* getNoticeByUser() {
  try {
    const user: UserState = yield select((state: AppState) => state.user)

    const total: TotalDataState = yield select((state: AppState) => state.total)

    const response: AxiosResponse = yield client.getAllNotifByUser({
      token: user?.userInfo?.token,
      partnerid: total?.partnerId,
      appid: total?.appId
    })
    yield put(ac.getNoticeByUserSuccess(response.data))
  } catch (error) {
    console.log('error getNoticeByUser:>> ', error)
  }
}

function* watcher_getNoticeByUser() {
  yield takeLatest(
    UserTypes.NoticeByUser.LIST_NOTICE_BY_USER_REQUEST,
    getNoticeByUser
  )
}

function* loginMedproId() {
  try {
    const total: TotalDataState = yield select((state: AppState) => state.total)
    const { origin, pathname } = window.location

    yield put(ac.loginAt(pathname))
    window.location.href = `${currentEnv.login}/url=${origin}&partnerId=${
      total.partnerId
    }&bookingFlow=${''}`
  } catch (error) {
    console.log(' error loginMedproId :>> ', error)
  }
}

function* watcher_loginMedproId() {
  yield takeLatest(UserTypes.Login.Login_medproID, loginMedproId)
}

function* userLogout() {
  try {
    const { pathname } = window.location

    yield put(ac.loginAt(pathname))
  } catch (error) {
    console.log(' error userLogout :>> ', error)
  }
}

function* watcher_userLogout() {
  yield takeLatest(UserTypes.User.USER_RESET, userLogout)
}

const userSagas = function* root() {
  yield all([
    fork(watcher_listPatientRequest),
    fork(watcher_getBookingByUser),
    fork(watcher_getNoticeByUser),
    fork(watcher_loginMedproId),
    fork(watcher_userLogout)
  ])
}
export default userSagas
