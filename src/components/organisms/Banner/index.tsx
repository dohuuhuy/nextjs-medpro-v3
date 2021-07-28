import { getListHospital } from '@actionStore/rootAction'
import { BannersCustom } from '@componentsTest/Banners'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BannerLayout = () => {
  const {
    listFeature,
    information: { banners }
  } = useSelector((state: AppState) => state.hospitalReducer)
  const { partnerId, appId } = useSelector(
    (state: AppState) => state.totalDataReducer
  )
  const router = useRouter()

  const { pathname } = router

  const getBanner = find(banners, { key: pathname })
  const dispatch = useDispatch()
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
