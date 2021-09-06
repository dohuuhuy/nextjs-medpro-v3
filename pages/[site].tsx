import { SEOHead } from '@components/SEO/SEOHead/Index'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const Site = () => {
  const meta: NextSeoProps = {
    title: 'Giới thiệu',
    description: 'Giới thiệu medpro',
    canonical: 'https://medpro.vn',
    openGraph: {
      type: 'website',
      url: 'https://medpro.vn',
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

  return (
    <>
      <SEOHead meta={meta} />
    </>
  )
}

Site.Layout = DefaultLayout
export default Site
