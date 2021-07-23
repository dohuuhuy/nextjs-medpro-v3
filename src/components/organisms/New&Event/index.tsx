import { NewsEventCustom } from '@components/test/News&Events'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsEventLayout = () => {
  const newsAndEvent = useSelector(
    (state: any) => state.news_Reducer.newsAndEvent
  )

  return <NewsEventCustom dataNewsAndEvent={newsAndEvent} />
}
export default NewsEventLayout
