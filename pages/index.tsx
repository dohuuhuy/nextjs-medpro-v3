import * as ac from '@actionStore/rootAction'
import { BannerHome } from '@componentsTest/BannerHome'
import { NewsEventCustom } from '@componentsTest/News&Events'
import { AppState } from '@store/interface'
import HomeLayout from '@templates/Home'
import { urlBanners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeCtl } from 'src/containers/home'
import useSWR from 'swr'

const HomePage = ({ data }: any) => {
  const { data: info, error } = useSWR(urlBanners, fetcher)

  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    !hos?.listFeatureByApp &&
      dispatch(
        ac.FeatureRequest({
          partnerId: total?.partnerId,
          typeReser: 'normal'
        })
      )

    !user?.listPatient && dispatch(ac.ListPatientRequest())
  }, [])

  if (error) return null

  const getBannerHome = find(info, { key: '/' })
  return (
    <>
      <BannerHome
        getBanner={getBannerHome}
        listFeature={hos?.listFeatureByApp}
        partnerId='medpro'
      />
      <NewsEventCustom dataNewsAndEvent={data.newsAndEvent} />
    </>
  )
}

HomePage.Layout = HomeLayout

export default HomePage

HomePage.getInitialProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)
  return { data }
}
