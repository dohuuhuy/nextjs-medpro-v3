import { urlAddress } from './../../../src/utils/contants'
import * as ac from '@actionStore/rootAction'
import { getData } from 'store/api'
import { TotalDataTypes } from 'store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getListPartners() {
  try {
    const url =
      'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
    const listPartners: [] = yield call(getData, url)

    yield put(ac.listPartnersRequestSuccess(listPartners))
  } catch (error) {
    console.error(error)
  }
}

function* WatchListPartners() {
  yield takeEvery(
    TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST,
    getListPartners
  )
}

const handlerUrl = (type: any, id: any) => {
  let url

  switch (type) {
    case 'city':
      url = urlAddress + '?country_code=' + id
      break

    case 'district':
      url = urlAddress + '?city_id=' + id
      break

    case 'ward':
      url = urlAddress + '?district_id=' + id
      break
  }

  return url
}

function* handlerAddress({ payload }: any) {
  try {
    const { type, id } = payload

    const respone: AxiosResponse = yield call(getData, handlerUrl(type, id))

    switch (type) {
      case 'city':
        yield put(ac.CityRequestSuccess(respone))
        break
      case 'district':
        yield put(ac.DistrictRequestSuccess(respone))
        break
      case 'ward':
        yield put(ac.WardRequestSuccess(respone))
        break
    }
  } catch (error) {
    console.error(error)
  }
}

function* WatchAddress() {
  yield takeLatest(TotalDataTypes.Address.ADDRESS_REQUEST, handlerAddress)
}

const totalDataSagas = function* root() {
  yield all([fork(WatchListPartners), fork(WatchAddress)])
}
export default totalDataSagas
