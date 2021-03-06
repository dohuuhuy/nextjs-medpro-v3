import * as ac from '@actionStore'
import { client } from '@config/medproSDK'
import { getData } from '@src/store/api'
import {
  AppState,
  // TotalDataState,
  TotalDataTypes,
  UserState
} from '@store/interface'
import { urlJson } from '@utils/contants'
import { fetcher, urlAddressType } from '@utils/func'
import { findPartnerId } from '@utils/partner'
import { AxiosResponse } from 'axios'
import {
  all,
  call,
  fork,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

function* getListPartners() {
  try {
    const user: UserState = yield select((state: AppState) => state.user)

    yield put(ac.setWindow(window.location))

    yield user.userInfo.token && client.setToken(user.userInfo.token)

    const response: AxiosResponse = yield fetcher(urlJson.urlListPartners)

    const partnerId = findPartnerId({
      listPartners: response,
      host: window.location.hostname
    })

    yield client.setPartner(partnerId)

    yield put(ac.getNoti())
    yield put(ac.listPartnersRequestSuccess(response))
    yield put(ac.SetParnerId(partnerId))

    yield put(
      ac.FeatureRequest({
        partnerId,
        typeReser: 'app'
      })
    )

    yield put(ac.getHeader(partnerId))
    yield put(ac.getBanners(partnerId))
    yield put(ac.getFooter(partnerId))
    yield put(ac.getNoti())

    // yield put(ac.setLoading(false))
  } catch (error) {
    console.log('error getListPartners :>> ', error)
  }
}

function* watcher_getListPartners() {
  yield takeEvery(
    TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST,
    getListPartners
  )
}

function* handlerAddress({ payload }: any) {
  try {
    const { type, id } = payload

    const respone: AxiosResponse = yield call(getData, urlAddressType(type, id))

    console.log('respone :>> ', respone)

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
    console.log('error handlerAddress :>> ', error)
  }
}

function* watcher_address() {
  yield takeLatest(TotalDataTypes.Address.ADDRESS_REQUEST, handlerAddress)
}

const totalDataSagas = function* root() {
  yield all([fork(watcher_getListPartners), fork(watcher_address)])
}
export default totalDataSagas
