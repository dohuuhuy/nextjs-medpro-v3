import { BannersText } from '@components/test/BannersText'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BannerLayout = () => {
  const banners = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.banners
  )
  const router = useRouter()

  const { pathname } = router

  const getBanner = find(banners, { key: pathname })

  return <BannersText getBanner={getBanner} />
}

export default BannerLayout
