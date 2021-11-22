import { BannersCustom } from '@componentsTest/BannersCustom'
import { urlBanners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

const Banners = () => {
  const { data: info, error } = useSWR(urlBanners, fetcher)

  const router = useRouter()

  if (error) return null

  const {
    query: { site }
  } = router

  const getBanner = find(info, { key: '/' + site })

  console.log('getBanner :>> ', getBanner)

  const methods: any = {
    getBanner
  }

  return <BannersCustom {...methods} />
}

export default Banners
