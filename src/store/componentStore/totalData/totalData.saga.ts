import {
  Hospital_Details_Action_Types,
  ListPartners_Action_Types,
  list_partners_item,
  partnerId_Local_Action_Types,
  totalData_Params,
} from '@store/interface'
import { handlerDoamain, run_local_hospital } from '@utils/run_local_hospitals'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

function* set_partnerId_local({
  partnerId,
  local = false,
}: totalData_Params.partnerLocal) {
  if (local) {
    const listPartners: Array<list_partners_item> = yield select(
      (state) => state.totalData_Reducer.list_partners,
    )

    const res: any = listPartners.find((i: any) =>
      i.domain.includes(handlerDoamain()),
    )

    if (res) {
      listPartners.pop()
    }

    const runObject: run_local_hospital = {
      listPartners: listPartners,
      partnerId,
      local,
    }

    const getPartnerId = run_local_hospital(runObject)

    if (getPartnerId) {
      yield put({
        type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS,
        partnerId: getPartnerId,
      })
    } else {
      yield put({
        type: Hospital_Details_Action_Types.Hospital_CLEAR_DETAILS,
      })
    }
  }
}

function* watch_partnerId_local() {
  yield takeLatest(
    partnerId_Local_Action_Types.partnerId_Local_REQUEST as any,
    set_partnerId_local,
  )
}

function* get_list_partners() {
  try {
    const url_list_partner =
      'https://medpro-api-v3-testing.medpro.com.vn/st/listPartner.json'
    const res: AxiosResponse<Array<list_partners_item>> = yield call(
      getData,
      url_list_partner,
    )

    window.localStorage.setItem('list_partners', JSON.stringify(res))

    yield put({
      type: ListPartners_Action_Types.ListPartners_REQUEST_SUCCESS,
      list_partners: res,
    })

    const runObject: run_local_hospital = {
      listPartners: res,
    }

    const getPartnerId = run_local_hospital(runObject)

    if (getPartnerId) {
      yield put({
        type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS,
        partnerId: getPartnerId,
      })
    }
  } catch (error) {}
}

function* watch_list_partners() {
  yield takeLatest(
    ListPartners_Action_Types.ListPartners_REQUEST as any,
    get_list_partners,
  )
}

const totalData_Sagas = function* root() {
  yield all([fork(watch_list_partners), fork(watch_partnerId_local)])
}
export default totalData_Sagas
