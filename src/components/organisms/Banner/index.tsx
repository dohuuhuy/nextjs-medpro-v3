import { Banner, BannersCustom } from '@componentsTest/BannersCustom'
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

  const getBanner = find(info.banners, { key: key })

  if (check(getBanner)) {
    const { menuHeader, insideLink, menuMobile } = info.header
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    const getLink = find(listMenu, { link: key })

    if (check(getLink)) {
      return null
    }
    return <BreadcumbCustom listMenu={listMenu} />
  }

  const methos: Banner = {
    getBanner: getBanner,
    listFeature: hos?.listFeatureByApp,
    partnerId: info?.partnerId
  }

  return <BannersCustom {...methos} />
}

export default BannerLayout
