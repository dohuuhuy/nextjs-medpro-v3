import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const GioiThieuPage = () => {
  return <HandlerGetContentPage />
}

GioiThieuPage.Layout = DefaultLayout
export default GioiThieuPage
