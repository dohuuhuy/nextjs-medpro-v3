import { BannersCustom } from '@componentsTest/BannersCustom'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { AppState, Information } from 'store/interface'
import { check } from '@utils/checkValue'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BannerLayout = (info: Information) => {
  const router = useRouter()

  const hos = useSelector((state: AppState) => state.hospitalReducer)

  const {
    query: { site },
    pathname
  } = router

  console.log('pathname :>> ', pathname)

  console.log('site :>> ', site)
  console.log('info.banners :>> ', info.banners)

  const getBanner = find(info.banners, { key: '/' })

  console.log('getBanner :>> ', getBanner)

  if (check(getBanner)) {
    const { menuHeader, insideLink, menuMobile } = info.header
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    const getLink = find(listMenu, { link: site })

    if (check(getLink)) {
      return null
    }
    return <BreadcumbCustom listMenu={listMenu} />
  }

  const methos = {
    getBanner,
    listFeature: hos.listFeatureByApp,
    partnerId: info?.partnerId
  }

  return <BannersCustom {...methos} />
}

export default BannerLayout
