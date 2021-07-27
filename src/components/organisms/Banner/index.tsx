// import { BannersCustom } from '@n17dccn172/booking-libs'
import { BannersCustom } from '@components/test/Banners'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BannerLayout = () => {
  const banners = useSelector(
    (state: AppState) => state.hospital_Reducer.information.banners
  )
  const feature_list = useSelector(
    (state: AppState) => state.hospital_Reducer.feature_list
  )
  const router = useRouter()

  const { pathname } = router

  const getBanner = find(banners, { key: pathname })

  return <BannersCustom getBanner={getBanner} listFeature={feature_list} />
}

export default BannerLayout
