import { BannerHome } from '@componentsTest/BannerHome'
import { NewsEventCustom } from '@componentsTest/News&Events'
import HomeLayout from '@templates/Home'
import { urlBanners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import React from 'react'
import { HomeCtl } from 'src/containers/home'
import useSWR from 'swr'

const HomePage = ({ data }: any) => {
  console.log('data :>> ', data)

  const { data: info, error } = useSWR(urlBanners, fetcher)
  if (error) return null

  const getBannerHome = find(info, { key: '/' })
  return (
    <>
      <BannerHome
        getBanner={getBannerHome}
        listFeature={[]}
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
