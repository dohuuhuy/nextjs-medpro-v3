import { NewsEventCustom } from '@n17dccn172/booking-libs'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsEventLayout = () => {
  const newsAndEvent = useSelector(
    (state: AppState) => state.news_Reducer.newsAndEvent
  )

  return <NewsEventCustom dataNewsAndEvent={newsAndEvent} />
}
export default NewsEventLayout
