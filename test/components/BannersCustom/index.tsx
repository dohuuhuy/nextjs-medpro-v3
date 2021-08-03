import React from 'react'
import { checkData, DataFailure } from '../DataFailure'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerHome } from './organisms/BannerHome'

export const BannersCustom = (props: any) => {
  const { getBanner } = props

  if (checkData(getBanner)) {
    return <DataFailure description={'Lỗi không có data banners'} />
  }

  switch (getBanner.key) {
    case '/':
      return <BannerHome {...props} />

    case '/lien-he':
      return <BannerContact getBanner={getBanner} />

    default:
      return <BannerDefault getBanner={getBanner} />
  }
}
