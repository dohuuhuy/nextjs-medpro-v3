import React from 'react'
import dynamic from 'next/dynamic'
import NewsPageDetails from '@components/organisms/NewsPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  return <NewsPageDetails />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage
