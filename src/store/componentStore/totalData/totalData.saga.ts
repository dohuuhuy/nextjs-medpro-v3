import { PartnerId_Action_Types } from '@store/interface'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

function* get_List_PartnerId() {
  try {
    const url_list_partner =
      'https://medpro-api-v3-testing.medpro.com.vn/st/listPartner.json'
    const res: AxiosResponse<Array<any>> = yield call(getData, url_list_partner)

    yield put({
      type: PartnerId_Action_Types.PartnerId_REQUEST_SUCCESS,
      list_partners: res,
    })
  } catch (error) {}
}

function* watch_partnerId() {
  yield takeLatest(
    PartnerId_Action_Types.PartnerId_REQUEST as any,
    get_List_PartnerId,
  )
}

const totalDataSagas = function* root() {
  yield all([fork(watch_partnerId)])
}
export default totalDataSagas
