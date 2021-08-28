import { NewsPageCustom } from '@componentsTest/NewsPage'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsPageDetails = () => {
  const { listNewsBanner, listNewsContent, totalPages } = useSelector(
    (state: AppState) => state.newsReducer
  )

  return (
    <NewsPageCustom
      listNewsBanner={listNewsBanner}
      listNewsContent={listNewsContent}
      totalPages={totalPages}
    />
  )
}
export default NewsPageDetails
