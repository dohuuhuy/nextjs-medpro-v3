import { BannersCustom } from '@componentsTest/BannersCustom'
import { urlBanners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

const Banners = () => {
  const router = useRouter()
  const {
    query: { site },
    pathname
  } = router

  const { data: info, error } = useSWR(urlBanners, fetcher)
  if (error) return null

  const key = site ? '/' + site : pathname
  const getBanner = find(info, { key })

  const methods: any = {
    getBanner
  }

  return <BannersCustom {...methods} />
}

export default Banners
