import NewsPageDetails from '@components/organisms/NewsPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  return <NewsPageDetails />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage
