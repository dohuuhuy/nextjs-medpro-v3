import {
  getCountNewsContent,
  getListNewsBanner,
  getListNewsContent
} from '@actionStore/rootAction'
import { NewsPageCustom } from '@componentsTest/NewsPage'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewsPageDetails = () => {
  const router = useRouter()
  const { page } = router.query

  const listNewsBanner = useSelector(
    (state: AppState) => state.newsReducer.listNewsBanner
  )

  const listNewsContent = useSelector(
    (state: AppState) => state.newsReducer.listNewsContent
  )

  const totalPages = useSelector(
    (state: AppState) => state.newsReducer.totalPages
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (check(listNewsBanner)) {
      dispatch(getListNewsBanner())
    }

    if (Number(totalPages) === 0) {
      dispatch(getCountNewsContent())
    }
  })

  useEffect(() => {
    dispatch(getListNewsContent(Number(page)))
  }, [page])

  return (
    <NewsPageCustom
      listNewsBanner={listNewsBanner}
      listNewsContent={listNewsContent}
      totalPages={totalPages}
    />
  )
}
export default NewsPageDetails
