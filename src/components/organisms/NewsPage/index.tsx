import { getListNewsBanner } from '@actionStore/rootAction'
import { NewsPageCustom } from '@componentsTest/NewsPage'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewsPageDetails = () => {
  const newsAndEvent = useSelector(
    (state: AppState) => state.newsReducer.newsAndEvent
  )

  const listNewsBanner = useSelector(
    (state: AppState) => state.newsReducer.listNewsBanner
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (check(listNewsBanner)) {
      dispatch(getListNewsBanner())
    }
  })

  return <NewsPageCustom dataNewsPage={newsAndEvent} />
}
export default NewsPageDetails
