import * as ac from '@actionStore'
import { client } from '@config/medproSDK'
import { currentEnv } from '@src/config/envs'
import {
  AppState,
  TotalDataState,
  UserState,
  UserTypes
} from '@src/store/interface'
import { huyi } from '@src/utils/clog'
import { openToast } from '@src/utils/Notification'
import { AxiosResponse } from 'axios'
import { get } from 'lodash'
import { all, fork, put, select, takeLatest } from 'redux-saga/effects'

function* listPatientRequest() {
  try {
    yield put(ac.setLoading(true))
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
    yield put(ac.setLoading(false))
  } catch (error) {
    console.log('error listPatientRequest :>> ', error)
    yield put(ac.setLoading(false))
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

    if (user?.userInfo?.token) {
      const response: AxiosResponse = yield client.getAllNotifByUser({
        token: user?.userInfo?.token,
        partnerid: total?.partnerId,
        appid: total?.partnerId || 'medpro'
      })
      yield put(ac.getNotiSuccess(response.data))
    }
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

    window.localStorage.setItem('loginAt', pathname)

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

function* getPaymentInfo({ mpTransaction }: any) {
  try {
    yield put(ac.setLoading())

    const total: TotalDataState = yield select((state: AppState) => state.total)

    const response: AxiosResponse = yield client.getPaymentInfo(
      { transactionId: mpTransaction },
      {
        partnerid: total.partnerId,
        appid: total.appId
      }
    )
    const status = get(response, 'data.bookingInfo.status', 0)
    const description = get(response, 'data.bookingInfo.description', '')

    // kiểm tra status thành công
    if (status === 1) {
      description &&
        openToast({
          type: 'success',
          message: 'Thông báo !',
          description: description
        })
    } else {
      description &&
        openToast({
          type: 'error',
          message: 'Thông báo !',
          description: description
        })
    }

    yield put(ac.setLoading(false))

    // 1. Lưu lại thông tin phiếu khám
    yield put(ac.getBillInfoSuccess(response.data))

    // 2. Chọn hồ sơ bệnh nhân từ phiếu khám
    yield put(ac.selectedPatient(response.data.bookingInfo.patient))

    // 3. Gọi lại danh sách thông báo
    yield put(ac.getNoti())
  } catch (error) {
    console.log(' error getPaymentInfo :>> ', error)
  }
}

function* watcher_getPaymentInfo() {
  yield takeLatest(UserTypes.Bill.Payment_INFO_REQUEST, getPaymentInfo)
}

function* readNoti({ id }: any) {
  try {
    const user: UserState = yield select((state: AppState) => state.user)
    const total: TotalDataState = yield select((state: AppState) => state.total)

    yield client.markViewedNotif(
      { id },
      { token: user.userInfo.token, partnerid: total.partnerId }
    )
    yield put(ac.getNoti())
  } catch (error) {
    huyi({ name: 'error-checkReadNoti', child: error, type: 0 })
  }
}

function* watcher_readNoti() {
  yield takeLatest(UserTypes.Noti.READ_NOTI_REQUEST, readNoti)
}

const userSagas = function* root() {
  yield all([
    fork(watcher_listPatientRequest),
    fork(watcher_getBookingByUser),
    fork(watcher_getNoti),
    fork(watcher_loginMedproId),
    fork(watcher_getBillInfo),
    fork(watcher_getPaymentInfo),
    fork(watcher_readNoti)
  ])
}
export default userSagas
