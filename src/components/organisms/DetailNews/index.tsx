import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

export const DetailsNews = () => {
  const { detailNews, listNewsBanner, sameNews } = useSelector(
    (state: AppState) => state.newsReducer
  )

  return (
    <DetailNewsCustom
      dataDetail={detailNews}
      dataNewest={listNewsBanner}
      dataSameNews={sameNews}
    />
  )
}
