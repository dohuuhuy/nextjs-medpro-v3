import React from 'react'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerHome } from './organisms/BannerHome'
import { checkDataInput, DataFailure } from './../DataFailure'

export const BannersCustom = (props: any) => {
  const { getBanner } = props

  if (checkDataInput(getBanner)) {
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
