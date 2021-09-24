import { BannersCustom } from '@componentsTest/BannersCustom'
import { Banner } from '@componentsTest/BannersCustom/interface'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { check } from '@utils/checkValue'
import { find, isUndefined } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, Information } from 'store/interface'

const Banners = (info: Information) => {
  const router = useRouter()
  const hos = useSelector((state: AppState) => state.hospital)

  if (check(info)) {
    return null
  }

  const {
    query: { site },
    pathname
  } = router

  const key = isUndefined(site) ? (pathname === '/' ? '/' : '') : `/${site}`
  const getBanner = find(info.banners, { key })

  if (check(getBanner)) {
    const { menu, insideLink } = info.header
    const listMenu = [].concat(menu, insideLink)

    const getLink = find(listMenu, (o: any) => {
      return pathname.includes(o?.link)
    })

    return check(getLink) ? null : (
      <BreadcumbCustom listMenu={listMenu} listHos={hos.listHospital} />
    )
  }

  const methods: Banner = {
    getBanner,
    listFeature: hos?.listFeatureByApp,
    partnerId: info?.partnerId
  }

  return <BannersCustom {...methods} />
}

export default Banners
