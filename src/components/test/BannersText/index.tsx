import React from 'react'
import { BannerContact } from './organisms/BannerContact'
import { BannerDefault } from './organisms/BannerDefault'
import { BannerHome } from './organisms/BannerHome'

export const BannersText = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }

  switch (getBanner.key) {
    case '/':
      return <BannerHome getBanner={getBanner} />

    case '/lien-he':
      return <BannerContact getBanner={getBanner} />

    default:
      return <BannerDefault getBanner={getBanner} />
  }
}
