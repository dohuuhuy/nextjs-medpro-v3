import React from 'react'
import { Banner } from './interface'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerNUll } from './organisms/BannerNull'

export const BannersCustom = (props: Banner) => {
  if (!props?.getBanner) return <BannerNUll />

  switch (props.getBanner.key) {
    case '/lien-he':
      return <BannerContact getBanner={props?.getBanner} />

    default:
      return <BannerDefault getBanner={props?.getBanner} />
  }
}
