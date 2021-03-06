import * as ac from '@actionStore'
import { countData, getData } from '@src/store/api'
import { NewsTypes } from '@src/store/interface'
import { news } from '@utils/contants'
import { AxiosResponse } from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getNewsAndEvent() {
  try {
    const urlPin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: AxiosResponse = yield call(getData, urlPin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: AxiosResponse = yield call(getData, url)

    yield put(ac.NewsAndEventRequestSuccess({ newsPin, news }))
  } catch (error) {
    console.log('error getNewsAndEvent sg :>> ', error)
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

    yield put(ac.ListNewsBannerRequestSuccess(response))
  } catch (error) {
    console.log('error getListNewsBanner sg :>> ', error)
  }
}

function* WatchGetListNewsBanner() {
  yield takeLatest(
    NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST,
    getListNewsBanner
  )
}

function* getListNewsContent({ page = 1 }) {
  try {
    const start = +page === 1 ? 0 : (+page - 1) * news.LIMIT_PAGE || 1
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&_start=${start}&_limit=${news.LIMIT_PAGE}`
    const response: AxiosResponse = yield call(getData, url)

    yield put(ac.ListNewsContentRequestSuccess(response))
  } catch (error) {
    console.log('error getListNewsContent sg :>> ', error)
  }
}

function* WatchGetListNewsContent() {
  yield takeLatest(
    NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST as any,
    getListNewsContent
  )
}

function* getCountNewsContent() {
  try {
    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc`
    const response: AxiosResponse = yield call(countData, url)
    yield put(ac.CountNewsContentRequestSuccess(response))
  } catch (error) {
    console.log('error getCountNewsContent sg :>> ', error)
  }
}

function* WatchGetCountNewsContent() {
  yield takeLatest(
    NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST,
    getCountNewsContent
  )
}

function* getDetailNews({ slug }: any) {
  try {
    const url = `https://cms.medpro.com.vn/posts?slug=${slug}`
    const reponse: AxiosResponse = yield call(getData, url)
    yield put(ac.DetailNewsRequestSuccess(reponse))
  } catch (error) {
    console.log('error getDetailNews sg :>> ', error)
  }
}

function* WatchGetDetailNews() {
  yield takeLatest(
    NewsTypes.DetailNews.DETAIL_NEWS_REQUEST as any,
    getDetailNews
  )
}

function* getSameNews() {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&categories.slug=tin-tuc&_limit=5`
    const reponse: AxiosResponse = yield call(getData, url)
    yield put(ac.SameNewsRequestSuccess(reponse))
  } catch (error) {
    console.log('error  getSameNews :>> ', error)
  }
}

function* WatchGetSameNews() {
  yield takeLatest(NewsTypes.SameNews.SAME_NEWS_REQUEST, getSameNews)
}

const newsSagas = function* root() {
  yield all([
    fork(WatchGetNewsAndEvent),
    fork(WatchGetListNewsBanner),
    fork(WatchGetListNewsContent),
    fork(WatchGetCountNewsContent),
    fork(WatchGetDetailNews),
    fork(WatchGetSameNews)
  ])
}
export default newsSagas
