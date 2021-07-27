import { getData } from '@store/api'
import { NewsAtHome_Action_Types } from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getListNewsAtHome() {
  try {
    const url_pin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: AxiosResponse<Array<any>> = yield call(getData, url_pin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: AxiosResponse<Array<any>> = yield call(getData, url)

    yield put({
      type: NewsAtHome_Action_Types.ListNewsAtHome_REQUEST_SUCCESS,
      newsPin,
      news
    })
  } catch (error) {}
}

function* watch_getListNewsAtHome() {
  yield takeLatest(
    NewsAtHome_Action_Types.ListNewsAtHome_REQUEST as any,
    getListNewsAtHome
  )
}

const news_Sagas = function* root() {
  yield all([fork(watch_getListNewsAtHome)])
}
export default news_Sagas
