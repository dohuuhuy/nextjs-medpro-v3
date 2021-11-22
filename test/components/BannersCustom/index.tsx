import React from 'react'
import { Banner } from './interface'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'

export const BannersCustom = (props: Banner) => {
  if (!props?.getBanner) return null

  switch (props.getBanner.key) {
    case '/lien-he':
      return <BannerContact getBanner={props?.getBanner} />

    default:
      return <BannerDefault getBanner={props?.getBanner} />
  }
}
