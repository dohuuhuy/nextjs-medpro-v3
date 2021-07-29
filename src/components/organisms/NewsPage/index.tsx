import { getListNewsBanner, getCountNewsContent, getListNewsContent } from '@actionStore/rootAction'
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

  const totalData = useSelector(
    (state: AppState) => state.newsReducer.totalData
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (check(listNewsBanner)) {
      dispatch(getListNewsBanner())
    }
    if (check(totalData)) {
      dispatch(getCountNewsContent())
    }
    if (check(listNewsContent)) {
      dispatch(getListNewsContent())
    }
  })

  return (
    <NewsPageCustom
      dataNewsPageBanner={listNewsBanner}
      dataNewsPageContent={listNewsContent}
      totalData={totalData}
    />
  )
}
export default NewsPageDetails
