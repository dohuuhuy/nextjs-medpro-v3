import React from 'react'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerHome } from './organisms/BannerHome'

export const BannersCustom = (props: any) => {
  const { getBanner } = props

  if (!getBanner) {
    return null
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
