import { BannersCustom } from '@componentsTest/BannersCustom'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BannersPublic = () => {
  const router = useRouter()
  const {
    query: { site },
    pathname
  } = router

  const hos = useSelector((state: AppState) => state.hospital)

  const { banners } = hos.information
  if (!banners) return null

  const key = site ? '/' + site : pathname
  const getBanner = find(banners, { key })

  const methods: any = {
    getBanner
  }

  return <BannersCustom {...methods} />
}

export default BannersPublic
