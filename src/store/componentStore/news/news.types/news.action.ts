import { NewsTypes } from '@store/interface'

export type NewsActions = NewsAndEventAction | ListNewsBannerAction

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

export type ListNewsBannerAction =
  | ListNewsBannerRequest
  | ListNewsBannerRequestSuccess

export interface ListNewsBannerRequest {
  type: NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST
}

export interface ListNewsBannerRequestSuccess {
  type: NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST_SUCCESS
  listNewsBanner: any[]
}
