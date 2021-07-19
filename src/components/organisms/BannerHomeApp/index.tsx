import BannerHomeCustom from '@components/test/Intro'
import React from 'react'

const BannerhomeLayout = () => {
  return <BannerHomeCustom dataBannerHome={bannerHome} />
}
export default BannerhomeLayout

const bannerHome: BannerHome = [
  {
    id: '',
    linkImage:
      'https://resource.medpro.com.vn/static/images/medpro/web/banner_desktop.png',
    alt: '',
  },
]

export interface BannerHome extends Array<BannerHomeItem> {}

export interface BannerHomeItem {
  id: string
  linkImage: string
  alt: string
}
