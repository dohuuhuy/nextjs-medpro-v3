import { getData } from '@store/api'
import { news_Types } from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getNewsAndEvent() {
  try {
    const url_pin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: AxiosResponse = yield call(getData, url_pin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: AxiosResponse = yield call(getData, url)

    yield put({
      type: news_Types.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS,
      newsPin,
      news
    })
  } catch (error) {}
}

function* watch_getNewsAndEvent() {
  yield takeLatest(
    news_Types.NewsAndEvent.NewsAndEvent_REQUEST,
    getNewsAndEvent
  )
}

function* getListNewsBanner() {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&_limit=3`
    const response: AxiosResponse = yield call(getData, url)
    yield put({
      type: news_Types.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS,
      listNewsBanner: response
    })
  } catch (error) {}
}

function* watch_getListNewsBanner() {
  yield takeLatest(
    news_Types.ListNewsBanner.ListNewsBanner_REQUEST,
    getListNewsBanner
  )
}

const news_Sagas = function* root() {
  yield all([fork(watch_getNewsAndEvent), fork(watch_getListNewsBanner)])
}
export default news_Sagas
