import * as ac from '@actionStore/rootAction'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getData } from 'store/api'
import { TotalDataTypes } from 'store/interface'
import { urlAddress, urlListPartners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { findPartnerId } from '@utils/partner'

function* getListPartners() {
  try {
    const response: AxiosResponse = yield fetcher(urlListPartners)

    yield put(ac.listPartnersRequestSuccess(response))

    const partnerId = findPartnerId({
      listPartners: response,
      host: window.location.hostname
    })

    yield put(ac.SetParnerId(partnerId))

    yield put(ac.getHeader(partnerId))

    yield put(
      ac.FeatureRequest({
        partnerId: partnerId,
        typeReser: 'normal'
      })
    )
    yield put(ac.getFooter(partnerId))
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
