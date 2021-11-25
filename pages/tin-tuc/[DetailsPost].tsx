import SEOPost from '@components/SEO/SEOPost/Index'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { DetailNewsCustom } from '@componentsTest/DetailNews'
import Loading from '@componentsTest/Loading'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ChiTietBaiViet } from 'src/containers/News/newsDetails'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = ({ data }: any) => {
  const router = useRouter()

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 400)
  }, [router.query.DetailsPost])

  if (loading) return <Loading component text='Đang cập nhật bài viết ...' />

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

export const getServerSideProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)
  return { props: { data } }
}
