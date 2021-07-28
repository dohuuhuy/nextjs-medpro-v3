import { _PRODUCTION } from '@config/envs/env'
import { getData } from '@store/api'
import {
  AppState,
  Hosptail_Types,
  totalData_Params,
  totalData_State,
  totalData_Types
} from '@store/interface'
import { persistor } from '@store/rootStore'
import { openToast } from '@utils/Notification'
import { findPartnerId } from '@utils/run_local_hospitals'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects'

function* set_partnerId_local({ partnerId }: totalData_Params.partnerLocal) {
  const list_partners: totalData_State = yield select(
    (state: AppState) => state.totalData_Reducer.list_partners
  )

  const runObject = {
    listPartners: list_partners,
    partnerId,
    local: true
  }

  const getPartner = findPartnerId(runObject)

  if (getPartner) {
    yield put({
      type: Hosptail_Types.Information.Hospital_CLEAR_DETAILS
    })

    persistor.purge()

    yield put({
      type: Hosptail_Types.Information.Information_REQUEST,
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

function* watch_partnerId_local() {
  yield takeLatest(
    totalData_Types.LocalPartnerId.partnerId_Local_REQUEST as any,
    set_partnerId_local
  )
}

function* get_list_partners() {
  try {
    const url =
      'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
    const listPartners: AxiosResponse = yield call(getData, url)

    yield put({
      type: totalData_Types.ListPartners.ListPartners_REQUEST_SUCCESS,
      list_partners: listPartners
    })

    if (_PRODUCTION) {
      const getPartner = findPartnerId({ listPartners })
      if (getPartner) {
        yield put({
          type: Hosptail_Types.Information.Information_REQUEST,
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
          type: Hosptail_Types.Information.Hospital_CLEAR_DETAILS
        })
      }
    }
  } catch (error) {}
}

function* watch_list_partners() {
  yield takeLatest(
    totalData_Types.ListPartners.ListPartners_REQUEST,
    get_list_partners
  )
}

const totalData_Sagas = function* root() {
  yield all([fork(watch_list_partners), fork(watch_partnerId_local)])
}
export default totalData_Sagas
