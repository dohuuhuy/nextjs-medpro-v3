import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const QuyTrinhPage = () => {
  useEffect(() => {}, [])

  return <HandlerGetContentPage />
}

QuyTrinhPage.Layout = DefaultLayout
export default QuyTrinhPage
