import * as ac from '@actionStore'
import { currentEnv } from '@src/config/envs'
import { client } from '@config/medproSDK'
import { AxiosResponse } from 'axios'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'
import {
  AppState,
  TotalDataState,
  UserState,
  UserTypes
} from '@src/store/interface'

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
      console.log('response.data :>> ', response.data);
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

function* getNoti() {
  try {
    const user: UserState = yield select((state: AppState) => state.user)

    const total: TotalDataState = yield select((state: AppState) => state.total)

    const response: AxiosResponse = yield client.getAllNotifByUser({
      token: user?.userInfo?.token,
      partnerid: total?.partnerId,
      appid: total?.appId
    })
    yield put(ac.getNotiSuccess(response.data))
  } catch (error) {
    console.log('error getNoti:>> ', error)
  }
}

function* watcher_getNoti() {
  yield takeLatest(UserTypes.Noti.LIST_NOTI_REQUEST, getNoti)
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

function* getBillInfo({ transactionId }: any) {
  try {
    const total: TotalDataState = yield select((state: AppState) => state.total)

    yield put(ac.setLoading())
    yield put(ac.setWindow(window.location))

    const post = {
      transactionId
    }

    const response: AxiosResponse = yield client.getBookingWithTransactionCode(
      post,
      {
        partnerid: total.partnerId,
        appid: total.appId
      }
    )
    yield put(ac.getBillInfoSuccess(response.data))
    yield put(ac.setLoading(false))
  } catch (error) {
    console.log(' error getBillInfo :>> ', error)
  }
}

function* watcher_getBillInfo() {
  yield takeLatest(UserTypes.Bill.BILL_INFO_REQUEST, getBillInfo)
}

const userSagas = function* root() {
  yield all([
    fork(watcher_listPatientRequest),
    fork(watcher_getBookingByUser),
    fork(watcher_getNoti),
    fork(watcher_loginMedproId),
    fork(watcher_getBillInfo)
  ])
}
export default userSagas
