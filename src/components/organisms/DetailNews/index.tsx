import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { AppState } from '@store/interface'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDetailNews, getListNewsBanner, getSameNews
} from '@actionStore/rootAction'
import { useRouter } from 'next/router'
import { check } from '@utils/checkValue'


export const DetailsNews = () => {
  const router = useRouter()
  const { DetailsPost } = router.query

  const { detailNews, listNewsBanner, sameNews } = useSelector(
    (state: AppState) => state.newsReducer
  )
  console.log("same ", sameNews, "baner ", listNewsBanner)

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
  return <DetailNewsCustom dataDetail={detailNews} dataNewest={listNewsBanner} dataSameNews={sameNews} />
}
