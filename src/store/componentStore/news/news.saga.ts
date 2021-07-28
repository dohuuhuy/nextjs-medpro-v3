import { getData } from '@store/api'
import { NewsTypes } from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getNewsAndEvent() {
  try {
    const url_pin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: AxiosResponse = yield call(getData, url_pin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: AxiosResponse = yield call(getData, url)

    yield put({
      type: NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS,
      newsPin,
      news
    })
  } catch (error) {}
}

function* WatchGetNewsAndEvent() {
  yield takeLatest(NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST, getNewsAndEvent)
}

function* getListNewsBanner() {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&_limit=3`
    const response: AxiosResponse = yield call(getData, url)
    yield put({
      type: NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS,
      listNewsBanner: response
    })
  } catch (error) {}
}

function* WatchGetListNewsBanner() {
  yield takeLatest(
    NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST,
    getListNewsBanner
  )
}

const newsSagas = function* root() {
  yield all([fork(WatchGetNewsAndEvent), fork(WatchGetListNewsBanner)])
}
export default newsSagas
