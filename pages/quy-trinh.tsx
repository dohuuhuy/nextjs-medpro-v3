import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const QuyTrinhPage = () => {
  return <HandlerGetContentPage />
}

QuyTrinhPage.Layout = DefaultLayout
export default QuyTrinhPage
