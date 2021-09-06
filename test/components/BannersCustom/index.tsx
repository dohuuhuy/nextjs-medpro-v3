import React from 'react'
import { checkData, DataFailure } from '../DataFailure'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerHome } from './organisms/BannerHome'

export interface Banner {
  getBanner: any
  listFeature: any[]
  partnerId: string
}

export const BannersCustom = (props: Banner) => {
  if (checkData(props?.getBanner)) {
    return <DataFailure desc={'Lỗi không có data banners'} />
  }

  switch (props.getBanner.key) {
    case '/':
      return <BannerHome {...props} />

    case '/lien-he':
      return <BannerContact getBanner={props?.getBanner} />

    default:
      return <BannerDefault getBanner={props?.getBanner} />
  }
}
