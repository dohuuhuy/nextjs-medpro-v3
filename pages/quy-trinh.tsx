import { SEOHead } from '@components/SEO/SEOHead/Index'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const QuyTrinhPage = () => {
  const meta: NextSeoProps = {
    title: 'Quy trình',
    description: 'Quy trình medpro',
    canonical: 'https://medpro.vn',
    openGraph: {
      type: 'website',
      url: 'https://medpro.vn',
      title: 'Quy trình',
      description: 'Quy trình medpro',
      images: [
        {
          url: `https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg`,
          width: 800,
          height: 600,
          alt: 'giới thiệu'
        }
      ],
      site_name: 'Trang Quy trình'
    }
  }

  return (
    <>
      <SEOHead meta={meta} />
    </>
  )
}

QuyTrinhPage.Layout = DefaultLayout
export default QuyTrinhPage
