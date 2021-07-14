import { Hospital_Action_Types, hospital_details } from '@store/interface'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

function* hospital_get_details() {
  try {
    const url = 'http://103.48.193.51:10016/hospital/full-details/bvtest'
    const res: AxiosResponse<hospital_details> = yield call(getData, url)

    yield put({
      type: Hospital_Action_Types.Hospital_REQUEST_DETAILS_SUCCESS,
      hospital_details: res,
    })
  } catch (error) {}
}

function* watch_hospital_get_details() {
  yield takeLatest(
    Hospital_Action_Types.Hospital_REQUEST_DETAILS as any,
    hospital_get_details,
  )
}

const hospital_Sagas = function* root() {
  yield all([fork(watch_hospital_get_details)])
}
export default hospital_Sagas
