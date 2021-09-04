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

  const { listFeature } = useSelector(
    (state: AppState) => state.hospitalReducer
  )

  const { pathname } = router

  const getBanner = find(info.banners, { key: pathname })

  if (check(getBanner)) {
    const { menuHeader, insideLink, menuMobile } = info.header
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    const getLink = find(listMenu, { link: pathname })

    if (check(getLink)) {
      return null
    }
    return <BreadcumbCustom listMenu={listMenu} />
  }

  return (
    <BannersCustom
      getBanner={getBanner}
      listFeature={listFeature}
      partnerId={info?.partnerId}
    />
  )
}

export default BannerLayout
