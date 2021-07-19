import {
  hospital_details,
  Hospital_Details_Action_Types,
  ListPartners_Action_Types,
} from '@store/interface'
import { openToast } from '@utils/Notification'
import axios, { AxiosResponse } from 'axios'
import { get } from 'lodash'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { _DEVELOPMENT } from './../../../config/envs/env'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

function* hospital_get_details({ partnerId }: any) {
  try {
    const url =
      'http://103.48.193.51:10016/hospital/v2/full-details/' + partnerId
    const res: AxiosResponse<hospital_details> = yield call(getData, url)

    yield put({
      type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS_SUCCESS,
      hospital_details: res,
    })

    yield put({
      type: ListPartners_Action_Types.SET_PartnerId,
      partnerId,
    })

    if (_DEVELOPMENT) {
      openToast({
        message: 'Chọn bệnh viện thành công!',
        type: 'success',
        duration: 4.5,
      })
    }
  } catch (error) {
    const { statusCode, message } = get(error, 'response.data', '')

    console.log(' statusCode, message :>> ', statusCode, message)

    yield put({
      type: ListPartners_Action_Types.SET_PartnerId,
      partnerId: '',
    })
    openToast({
      message,
      type: 'error',
      duration: 4.5,
    })
  }
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
