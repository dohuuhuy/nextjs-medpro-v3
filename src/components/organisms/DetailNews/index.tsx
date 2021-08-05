import {
  getDetailNews,
  getListNewsBanner,
  getSameNews
} from '@actionStore/rootAction'
import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DetailsNews = () => {
  const router = useRouter()
  const { DetailsPost } = router.query

  const { detailNews, listNewsBanner, sameNews } = useSelector(
    (state: AppState) => state.newsReducer
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (check(sameNews)) {
      dispatch(getSameNews())
    }
    if (check(listNewsBanner)) {
      dispatch(getListNewsBanner())
    }
  })
  useEffect(() => {
    dispatch(getDetailNews(DetailsPost))
  }, [DetailsPost])
  return (
    <DetailNewsCustom
      dataDetail={detailNews}
      dataNewest={listNewsBanner}
      dataSameNews={sameNews}
    />
  )
}
