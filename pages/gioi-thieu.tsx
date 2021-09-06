import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const GioiThieuPage = () => {
  return (
    <>
      <NextSeo
        title={'Giới thiệu'}
        description={'Giới thiệu medpro'}
        canonical={'https://medpro.vn'}
        openGraph={{
          type: '',
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
        }}
      />
    </>
  )
}

GioiThieuPage.Layout = DefaultLayout
export default GioiThieuPage
