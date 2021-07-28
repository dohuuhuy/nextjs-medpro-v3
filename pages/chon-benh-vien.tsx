import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = () => {
  return <HandlerGetContentPage />
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
