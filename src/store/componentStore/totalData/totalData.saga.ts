import { ListPartners_Action_Types, list_partners_item } from '@store/interface'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
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
  } catch (error) {}
}

function* watch_list_partners() {
  yield takeLatest(
    ListPartners_Action_Types.ListPartners_REQUEST as any,
    get_list_partners,
  )
}

const totalData_Sagas = function* root() {
  yield all([fork(watch_list_partners)])
}
export default totalData_Sagas
