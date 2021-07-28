import { NewsPageCustom } from '@componentsTest/NewsPage'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsEventLayout = () => {
  const newsAndEvent = useSelector(
    (state: AppState) => state.news_Reducer.newsAndEvent
  )

  return <NewsPageCustom dataNewsPage={newsAndEvent} />
}
export default NewsEventLayout
