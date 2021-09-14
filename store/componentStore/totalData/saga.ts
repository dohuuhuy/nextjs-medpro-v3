import * as ac from '@actionStore/rootAction'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getData } from 'store/api'
import { TotalDataTypes } from 'store/interface'
import { urlAddress } from '@utils/contants'

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

function* handlerAddress({ payload }: any) {
  try {
    const { type, id } = payload

    const respone: AxiosResponse = yield call(getData, urlAddress(type, id))

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
