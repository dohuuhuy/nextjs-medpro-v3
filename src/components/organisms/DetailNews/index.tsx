import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDetailNews
} from '@actionStore/rootAction'

interface DetailNews {
  dataslug?: any
}

export const DetailsNews = ({ dataslug }: DetailNews) => {
  console.log(dataslug)
  const dataDetailNews = useSelector(
    (state: AppState) => state.newsReducer.detailNews
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (check(dataDetailNews)) {
      dispatch(getDetailNews())
    }
  })

  return <DetailNewsCustom dataDetail={dataDetailNews} />
}
