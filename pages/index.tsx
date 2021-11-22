import { NewsEventCustom } from '@componentsTest/News&Events'
import HomeLayout from '@templates/Home'
import React from 'react'
import { HomeCtl } from 'src/containers/home'

const HomePage = ({ data }: any) => {
  console.log('data :>> ', data)
  return (
    <>
      <p>dvdvuih</p>
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
