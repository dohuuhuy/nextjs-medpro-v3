import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return <HandlerGetContentPage />
}

LienHePage.Layout = DefaultLayout
export default LienHePage
