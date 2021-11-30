import { BannersCustom } from '@componentsTest/BannersCustom'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as a from '@actionStore'

const BannersPublic = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    query: { site },
    pathname
  } = router

  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)
  const { banners } = hos.information
  if (!banners) {
    dispatch(a.getBanners(total.partnerId))
    return null
  }

  const key = site ? '/' + site : pathname
  const getBanner = find(banners, { key })

  const methods: any = {
    getBanner
  }

  return <BannersCustom {...methods} />
}

export default BannersPublic
