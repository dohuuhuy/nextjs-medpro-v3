import BannerHomeCustom from '@components/test/Intro'
import React from 'react'

const BannerhomeLayout = () => {
  return <BannerHomeCustom dataBannerHome={bannerHome} />
}
export default BannerhomeLayout

const bannerHome: bannerHome = [
  {
    id: '',
    linkImage:
      'https://resource.medpro.com.vn/static/images/medpro/web/banner_desktop.png',
    alt: '',
  },
]

export interface bannerHome extends Array<bannerHomeItem> {}
export interface bannerHomeItem {
  id: string
  linkImage: string
  alt: string
}
