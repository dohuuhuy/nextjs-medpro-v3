import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const XacNhanThongTinPage = () => {
  return <HandlerGetContentPage />
}

XacNhanThongTinPage.Layout = DefaultLayout
export default XacNhanThongTinPage