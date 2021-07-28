import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  return <HandlerGetContentPage />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage