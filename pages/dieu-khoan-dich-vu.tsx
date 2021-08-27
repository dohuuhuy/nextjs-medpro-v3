import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return <HandlerGetContentPage />
}

LienHePage.Layout = DefaultLayout
export default LienHePage
