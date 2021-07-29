import { NewsTypes } from '@store/interface'

export type NewsActions =
  | NewsAndEventAction
  | ListNewsBannerAction
  | ListNewsContentAction
  | CountNewsContentAction

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

// ----------------------------------------------------------------------------------------------

export type ListNewsContentAction =
  | ListNewsContentRequest
  | ListNewsContentRequestSuccess

export interface ListNewsContentRequest {
  type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST
}

export interface ListNewsContentRequestSuccess {
  type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST_SUCCESS
  listNewsContent: any[]
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
