import { BannerHome } from '@componentsTest/BannerHome'
import { NewsEventCustom } from '@componentsTest/News&Events'
import HomeLayout from '@templates/Home'
import { urlBanners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { HomeCtl } from 'src/containers/home'
import useSWR from 'swr'

const HomePage = ({ data }: any) => {
  const router = useRouter()
  const {
    query: { site },
    pathname
  } = router

  console.log('data :>> ', data)

  const { data: info, error } = useSWR(urlBanners, fetcher)
  if (error) return null

  const key = site ? '/' + site : pathname
  const getBanner = find(info, { key })
  return (
    <>
      <BannerHome getBanner={getBanner} listFeature={[]} partnerId='medpro' />
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
