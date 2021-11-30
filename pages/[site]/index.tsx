import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { SEOHead } from '@components/SEO/SEOHead/Index'
const DefaultLayout = dynamic(() => import('@templates/Default'))
import { urlContent } from '@utils/contants'
import { fetcher } from '@utils/func'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Site = ({ data }: any) => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes('phong-mach')) {
      window.open('https://medpro.vn/clinic', '_blank')
    }
  }, [router.asPath])

  if (!data) return null
  return (
    <>
      <SEOHead meta={meta} />
      <HandlerGetContentPage dataContent={data} />
    </>
  )
}

Site.layout = DefaultLayout

export default Site

export const getServerSideProps = async () => {
  const data = await fetcher(urlContent)

  return { props: { data } }
}

const meta: NextSeoProps = {
  noindex: false,
  nofollow: false,
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
