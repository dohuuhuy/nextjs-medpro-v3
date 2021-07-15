import dynamic from 'next/dynamic'
import React from 'react'
const HomeLayout = dynamic(() => import('@templates/Home/home'))
const HomeDetail = dynamic(() => import('@components/page/HomeDetail'))
import Script from 'next/script'

const HomePage = () => {
  return (
    <>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=WebAnimations"
        strategy="beforeInteractive"
      />
      <HomeDetail />
    </>
  )
}

HomePage.Layout = HomeLayout
export default HomePage
