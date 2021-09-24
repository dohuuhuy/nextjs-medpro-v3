import { LoadingOutlined } from '@ant-design/icons'
import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { check } from '@utils/checkValue'
import { Spin } from 'antd'
import dynamic from 'next/dynamic'
import React from 'react'
import { ChiTietBaiViet } from 'src/containers/News/newsDetails'

const DefaultLayout = dynamic(() => import('@templates/Default'))
const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin={true} />

const DetailsPostPage = ({ data }: any) => {
  if (check(data)) {
    return <Spin indicator={antIcon} />
  }

  return <DetailNewsCustom {...data} />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

export const getStaticProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)
  return {
    props: { data },
    revalidate: 1
  }
}
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
