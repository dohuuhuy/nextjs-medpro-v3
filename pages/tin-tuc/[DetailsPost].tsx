import SEOPost from '@components/SEO/SEOPost/Index'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { DetailNewsCustom } from '@componentsTest/DetailNews'
import dynamic from 'next/dynamic'
import React from 'react'
import { ChiTietBaiViet } from 'src/containers/News/newsDetails'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = ({ data }: any) => {
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

DetailsPostPage.layout = DefaultLayout

export default DetailsPostPage

export const getServerSideProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)
  return { props: { data } }
}
