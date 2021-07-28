import { _PRODUCTION } from '@config/envs/env'
import { getData } from '@store/api'
import {
  AppState,
  HosptailTypes,
  TotalDataParams,
  TotalDataState,
  TotalDataTypes
} from '@store/interface'
import { persistor } from '@store/rootStore'
import { openToast } from '@utils/Notification'
import { findPartnerId } from '@utils/run_local_hospitals'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects'

function* setPartnerIdLocal({ partnerId }: TotalDataParams.partnerLocal) {
  const listPartners: TotalDataState = yield select(
    (state: AppState) => state.totalDataReducer.listPartners
  )

  const runObject = {
    listPartners: listPartners,
    partnerId,
    local: true
  }

  const getPartner = findPartnerId(runObject)

  if (getPartner) {
    yield put({
      type: HosptailTypes.Information.Hospital_CLEAR_DETAILS
    })

    persistor.purge()

    yield put({
      type: HosptailTypes.Information.Information_REQUEST,
      partnerId: getPartner
    })
  } else {
    openToast({
      message: 'Không tìm thấy partnerId của bệnh viên, vui lòng thử lại !',
      type: 'error',
      duration: 3
    })
  }
}

function* WatchSetPartnerIdLocal() {
  yield takeLatest(
    TotalDataTypes.LocalPartnerId.partnerId_Local_REQUEST as any,
    setPartnerIdLocal
  )
}

function* getListPartners() {
  try {
    const url =
      'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
    const listPartners: AxiosResponse = yield call(getData, url)

    yield put({
      type: TotalDataTypes.ListPartners.ListPartners_REQUEST_SUCCESS,
      listPartners
    })

    if (_PRODUCTION) {
      const getPartner = findPartnerId({ listPartners })
      if (getPartner) {
        yield put({
          type: HosptailTypes.Information.Information_REQUEST,
          partnerId: getPartner
        })
      } else {
        openToast({
          message:
            'Không tìm thấy partnerId của bệnh viên, vui lòng thông báo cho chúng tôi khi thấy sự cố này !',
          type: 'error',
          duration: 1000
        })

        yield put({
          type: HosptailTypes.Information.Hospital_CLEAR_DETAILS
        })
      }
    }
  } catch (error) {}
}

function* WatchListPartners() {
  yield takeLatest(
    TotalDataTypes.ListPartners.ListPartners_REQUEST,
    getListPartners
  )
}

const totalDataSagas = function* root() {
  yield all([fork(WatchListPartners), fork(WatchSetPartnerIdLocal)])
}
export default totalDataSagas
