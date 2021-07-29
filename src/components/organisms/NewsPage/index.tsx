import { getListNewsBanner, getListNewsContent } from '@actionStore/rootAction'
import { NewsPageCustom } from '@componentsTest/NewsPage'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewsPageDetails = () => {
  const listNewsBanner = useSelector(
    (state: AppState) => state.newsReducer.listNewsBanner
  )

  const listNewsContent = useSelector(
    (state: AppState) => state.newsReducer.listNewsContent
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (check(listNewsBanner) && check(listNewsContent)) {
      dispatch(getListNewsBanner()),
        dispatch(getListNewsContent())
    }
  })

  return <NewsPageCustom dataNewsPageBanner={listNewsBanner} dataNewsPageContent={listNewsContent} />
}
export default NewsPageDetails
