/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NewsTypes } from '@store/interface'

export type NewsActions =
  | NewsAndEventAction
  | ListNewsBannerAction
  | ListNewsContentAction
  | CountNewsContentAction
  | DetailNewsAction
  | SameNewsAction

// ----------------------------------------------------------------------------------------------

export type NewsAndEventAction =
  | NewsAndEventRequest
  | Newsandeventrequestsuccess

export interface NewsAndEventRequest {
  type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST
}

export interface Newsandeventrequestsuccess {
  type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST_SUCCESS
  newsPin: any[]
  news: any[]
}

export const Newsandeventrequestsuccess = ({ newsPin, news }: any) => {
  return {
    type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST_SUCCESS,
    newsPin,
    news
  }
}

// ----------------------------------------------------------------------------------------------

export type ListNewsBannerAction =
  | ListNewsBannerRequest
  | ListNewsBannerRequestSuccess

export interface ListNewsBannerRequest {
  type: NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST
}

export interface ListNewsBannerRequestSuccess {
  type: NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST_SUCCESS
  listNewsBanner: any[]
}

export const ListNewsBannerRequestSuccess = (listNewsBanner: any) => {
  return {
    type: NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST_SUCCESS,
    listNewsBanner
  }
}

// ----------------------------------------------------------------------------------------------

export type ListNewsContentAction =
  | ListNewsContentRequest
  | ListNewsContentRequestSuccess

export interface ListNewsContentRequest {
  type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST
  page: number
}

export interface ListNewsContentRequestSuccess {
  type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST_SUCCESS
  listNewsContent: any[]
}

export const ListNewsContentRequestSuccess = (listNewsContent: any) => {
  return {
    type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST_SUCCESS,
    listNewsContent
  }
}

// ----------------------------------------------------------------------------------------------

export type CountNewsContentAction =
  | CountNewsContentRequest
  | CountNewsContentRequestSuccess

export interface CountNewsContentRequest {
  type: NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST
}

export interface CountNewsContentRequestSuccess {
  type: NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST_SUCCESS
  totalPages: number
}

export const CountNewsContentRequestSuccess = (totalPages: any) => {
  return {
    type: NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST_SUCCESS,
    totalPages
  }
}

// -----------------------------------------------------------------------------------------------

export type DetailNewsAction = DetailNewsRequest | DetailNewsRequestSuccess

export interface DetailNewsRequest {
  type: NewsTypes.DetailNews.DETAIL_NEWS_REQUEST
  slug: string
}

export interface DetailNewsRequestSuccess {
  type: NewsTypes.DetailNews.DETAIL_NEWS_REQUEST_SUCCESS
  detailNews: any[]
}

export const DetailNewsRequestSuccess = (detailNews: any) => {
  return {
    type: NewsTypes.DetailNews.DETAIL_NEWS_REQUEST_SUCCESS,
    detailNews
  }
}

// -----------------------------------------------------------------------------------------------

export type SameNewsAction = SameNewsRequest | SameNewsRequestSuccess

export interface SameNewsRequest {
  type: NewsTypes.SameNews.SAME_NEWS_REQUEST
}

export interface SameNewsRequestSuccess {
  type: NewsTypes.SameNews.SAME_NEWS_REQUEST_SUCCESS
  sameNews: any[]
}

export const SameNewsRequestSuccess = (sameNews: any) => {
  return {
    type: NewsTypes.SameNews.SAME_NEWS_REQUEST_SUCCESS,
    sameNews
  }
}
// -----------------------------------------------------------------------------------------------
