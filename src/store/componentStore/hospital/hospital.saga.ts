import {
  hospital_details,
  Hospital_Details_Action_Types,
} from '@store/interface'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

function* hospital_get_details({ partnerId }: any) {
  try {
    const url = 'http://103.48.193.51:10016/hospital/full-details/' + partnerId
    const res: AxiosResponse<hospital_details> = yield call(getData, url)

    console.log('vhospital_get_details :>> ', partnerId)

    yield put({
      type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS_SUCCESS,
      hospital_details: res,
    })
  } catch (error) {}
}

function* watch_hospital_get_details() {
  yield takeEvery(
    Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS as any,
    hospital_get_details,
  )
}

const hospital_Sagas = function* root() {
  yield all([fork(watch_hospital_get_details)])
}
export default hospital_Sagas
