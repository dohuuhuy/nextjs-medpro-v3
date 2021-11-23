import { BannerHome } from '@componentsTest/BannerHome'
import { NewsEventCustom } from '@componentsTest/News&Events'
import { AppState } from '@store/interface'
import HomeLayout from '@templates/Home'
import { banner } from '@utils/func'
import React from 'react'
import { useSelector } from 'react-redux'
import { HomeCtl } from 'src/containers/home'

const HomePage = ({ data }: any) => {
  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  return (
    <>
      <BannerHome
        getBanner={banner(total?.partnerId)}
        listFeature={hos?.listFeatureByApp}
        partnerId={total?.partnerId}
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
