import { getListHospital } from '@actionStore/rootAction'
import { BannersCustom } from '@componentsTest/BannersCustom'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BannerLayout = ({ banners, header }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { listFeature, listHospital } = useSelector(
    (state: AppState) => state.hospitalReducer
  )

  const { partnerId, appId } = useSelector(
    (state: AppState) => state.totalDataReducer
  )

  const { pathname } = router

  const getBanner = find(banners, { key: pathname })

  if (check(getBanner)) {
    if (check(header)) {
      return null
    }
    const { menuHeader, insideLink, menuMobile } = header
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    const getLink = find(listMenu, { link: pathname })

    if (check(getLink)) {
      return null
    }
    return <BreadcumbCustom listMenu={listMenu} />
  }

  const fncGetListHospital = () => {
    if (check(listHospital)) {
      dispatch(getListHospital())
    }
  }

  return (
    <BannersCustom
      dispatchListHospital={fncGetListHospital}
      getBanner={getBanner}
      listFeature={listFeature}
      partnerId={partnerId}
      appId={appId}
    />
  )
}

export default BannerLayout
