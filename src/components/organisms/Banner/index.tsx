import { getListHospital } from '@actionStore/rootAction'
import { BannersCustom } from '@componentsTest/BannersCustom'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BannerLayout = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    listFeature,
    information: {
      banners,
      header: { menuHeader, insideLink, menuMobile }
    }
  } = useSelector((state: AppState) => state.hospitalReducer)

  const { partnerId, appId } = useSelector(
    (state: AppState) => state.totalDataReducer
  )

  const { pathname } = router

  const getBanner = find(banners, { key: pathname })

  if (check(getBanner)) {
    const listMenu = [].concat(menuHeader, insideLink, menuMobile)
    return <BreadcumbCustom listMenu={listMenu} />
  }

  return (
    <BannersCustom
      dispatchListHospital={() => dispatch(getListHospital())}
      getBanner={getBanner}
      listFeature={listFeature}
      partnerId={partnerId}
      appId={appId}
    />
  )
}

export default BannerLayout
