import NewsPageDetails from '@components/pages/NewsPage'
import dynamic from 'next/dynamic'
import React from 'react'
import { TinTucCtrl } from 'src/containers/News/news'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = ({ data }: any) => {
  return <NewsPageDetails {...data} />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage

export const getServerSideProps = async (ctx: any) => {
  const data = await TinTucCtrl(ctx)

  return { props: { data } }
}
