// import { NewsEventCustom } from '@medpro/booking-libs'
import { NewsEventCustom } from '@componentsTest/News&Events'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const NewsEventLayout = () => {
  const newsAndEvent = useSelector(
    (state: AppState) => state.newsReducer.newsAndEvent
  )

  return <NewsEventCustom dataNewsAndEvent={newsAndEvent} />
}
export default NewsEventLayout
