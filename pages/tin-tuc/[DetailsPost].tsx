import { LoadingOutlined } from '@ant-design/icons'
import SEOPost from '@components/SEO/SEOPost/Index'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
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

  if (!data) return null

  const post = {
    title: data.detailNews[0]?.title || '',
    slug: data.detailNews[0]?.slug || ''
  }

  return (
    <>
      <SEOPost posts={data.detailNews[0]} />
      <BreadcumbCustom post={post} type='news' />
      <DetailNewsCustom {...data} />
    </>
  )
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

DetailsPostPage.getInitialProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)

  return { data }
}

// build quá lâu

// export const getStaticProps = async (ctx: any) => {
//   const data = await ChiTietBaiViet(ctx)
//   return {
//     props: { data },
//     revalidate: 1
//   }
// }
// export const getStaticPaths = async () => {
//   const data = await getDetail()

//   const paths = data.map((v: any) => ({
//     params: { DetailsPost: v.slug }
//   }))

//   return {
//     paths: paths,
//     fallback: true
//   }
// }
