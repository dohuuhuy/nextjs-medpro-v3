import { getData } from '@store/api'
import {
  ListCityRequestSuccess,
  ListPartnersRequestSuccess,
  TotalDataTypes
} from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getListPartners() {
  try {
    const url =
      'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
    const listPartners: AxiosResponse = yield call(getData, url)

    yield put(ListPartnersRequestSuccess(listPartners))
  } catch (error) {
    console.error(error)
  }
}

function* WatchListPartners() {
  yield takeLatest(
    TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST,
    getListPartners
  )
}

function* getListCity() {
  try {
    const url =
      'https://medpro-api-v2-testing.medpro.com.vn/city-mongo/get-all-by-partner'
    const respone: AxiosResponse = yield call(getData, url)
    yield put(ListCityRequestSuccess(respone))
  } catch (error) {
    console.error(error)
  }
}

function* WatchListCity() {
  yield takeEvery(TotalDataTypes.ListCity.LIST_CITY_REQUEST, getListCity)
}

const totalDataSagas = function* root() {
  yield all([fork(WatchListPartners), fork(WatchListCity)])
}
export default totalDataSagas
