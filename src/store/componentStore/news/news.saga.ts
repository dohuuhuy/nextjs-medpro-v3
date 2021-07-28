import { getData } from '@store/api'
import { NewsTypes } from '@store/interface'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getNewsAndEvent() {
  try {
    const urlPin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: AxiosResponse = yield call(getData, urlPin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: AxiosResponse = yield call(getData, url)

    yield put({
      type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST_SUCCESS,
      newsPin,
      news
    })
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetNewsAndEvent() {
  yield takeLatest(
    NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST,
    getNewsAndEvent
  )
}

function* getListNewsBanner() {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&_limit=3`
    const response: AxiosResponse = yield call(getData, url)
    yield put({
      type: NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST_SUCCESS,
      listNewsBanner: response
    })
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetListNewsBanner() {
  yield takeLatest(
    NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST,
    getListNewsBanner
  )
}

function* getListNewsContent() {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC`
    const response: AxiosResponse = yield call(getData, url)
    yield put({
      type: NewsTypes.ListNewsContent.LISTNEWSCONTENT_REQUEST_SUCCESS,
      listNewsContent: response
    })
  } catch (error) {
    console.error(error)
  }
}

function* WatchGetListNewsContent() {
  yield takeLatest(
    NewsTypes.ListNewsContent.LISTNEWSCONTENT_REQUEST,
    getListNewsContent
  )
}

const newsSagas = function* root() {
  yield all([fork(WatchGetNewsAndEvent), fork(WatchGetListNewsBanner), fork(WatchGetListNewsContent)])
}
export default newsSagas
