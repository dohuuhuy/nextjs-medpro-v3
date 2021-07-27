import { NewsEventCustom } from '@n17dccn172/booking-libs'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsEventLayout = () => {
  const newsAndEvent = useSelector(
    (state: any) => state.news_Reducer.newsAndEvent
  )

  return <NewsEventCustom dataNewsAndEvent={newsAndEvent} />
}
export default NewsEventLayout
