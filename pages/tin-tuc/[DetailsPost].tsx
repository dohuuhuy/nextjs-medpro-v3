import { DetailNewsCustom } from '@componentsTest/DetailNews'
import dynamic from 'next/dynamic'
import React from 'react'
import { ChiTietBaiViet } from 'src/containers/News/newsDetails'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = ({ data }: any) => {
  return <DetailNewsCustom {...data} />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

export const getServerSideProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)

  return { props: { data } }
}
