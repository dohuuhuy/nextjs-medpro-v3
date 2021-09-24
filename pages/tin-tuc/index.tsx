import { NewsPageCustom } from '@componentsTest/NewsPage'
import dynamic from 'next/dynamic'
import React from 'react'
import { TinTucCtrl } from 'src/containers/News/news'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = (props: any) => {
  return <NewsPageCustom {...props.data} />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage

TinTucPage.getInitialProps = async (ctx: any) => {
  const data = await TinTucCtrl(ctx)

  return { data }
}
