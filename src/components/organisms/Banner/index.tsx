import { BannersCustom } from '@componentsTest/BannersCustom'
import { Banner } from '@componentsTest/BannersCustom/interface'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { check } from '@utils/checkValue'
import { find, isUndefined } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, Information } from 'store/interface'

const BannerLayout = (info: Information) => {
  const router = useRouter()
  const hos = useSelector((state: AppState) => state.hospitalReducer)
  const {
    query: { site },
    pathname
  } = router

  const key = isUndefined(site) ? (pathname === '/' ? '/' : '') : `/${site}`
  const getBanner = find(info.banners, { key })

  if (check(getBanner)) {
    const { menuHeader, insideLink, menuMobile } = info.header
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    const getLink = find(listMenu, (o: any) => {
      return o.link !== '/' && pathname.includes(o.link)
    })

    return check(getLink) ? null : <BreadcumbCustom listMenu={listMenu} />
  }

  const methos: Banner = {
    getBanner,
    listFeature: hos?.listFeatureByApp,
    partnerId: info?.partnerId
  }

  return <BannersCustom {...methos} />
}

export default BannerLayout
