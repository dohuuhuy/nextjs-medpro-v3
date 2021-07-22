import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDanPage = () => {
  useEffect(() => {}, [])

  return <HandlerGetContentPage />
}

HuongDanPage.Layout = DefaultLayout
export default HuongDanPage
