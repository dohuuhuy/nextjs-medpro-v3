import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import DefaultLayout from '@templates/Default'
import { urlContent } from '@utils/contants'
import { fetcher } from '@utils/func'
import { NextSeoProps } from 'next-seo'
import React from 'react'

const Site = ({ data }: any) => {
  if (!data) return null

  return (
    <>
      <SEOHead meta={meta} />
      <HandlerGetContentPage dataContent={data} />
    </>
  )
}

Site.Layout = DefaultLayout
export default Site

export const getServerSideProps = async () => {
  const data = await fetcher(urlContent)

  return { props: { data } }
}

const meta: NextSeoProps = {
  noindex: true,
  nofollow: true,
  robotsProps: {},
  title: 'Giới thiệu',
  description: 'Giới thiệu medpro',
  canonical: 'https://nextjs-testing.medpro.com.vn',
  openGraph: {
    type: 'website',
    url: 'https://nextjs-testing.medpro.com.vn',
    title: 'Giới thiệu',
    description: 'Giới thiệu medpro',
    images: [
      {
        url: `https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg`,
        width: 800,
        height: 600,
        alt: 'giới thiệu'
      }
    ],
    site_name: 'Trang Giới thiệu'
  }
}
