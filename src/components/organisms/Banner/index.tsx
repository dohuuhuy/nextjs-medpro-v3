import { BannersCustom } from '@n17dccn172/booking-libs'
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

  return <BannersCustom getBanner={getBanner} />
}

export default BannerLayout
