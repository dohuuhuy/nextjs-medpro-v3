import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDanPage = () => {
  return <HandlerGetContentPage />
}

HuongDanPage.Layout = DefaultLayout
export default HuongDanPage
