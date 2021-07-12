import dynamic from 'next/dynamic'
import React from 'react'
const HomeLayout = dynamic(() => import('@templates/Home/home'))
const HomeDetail = dynamic(() => import('@components/page/HomeDetail'))

const HomePage = () => {
  return <HomeDetail />
}

HomePage.Layout = HomeLayout
export default HomePage
