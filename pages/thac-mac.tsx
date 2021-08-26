import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThacMacPage = () => {
  return <HandlerGetContentPage />
}

ThacMacPage.Layout = DefaultLayout
export default ThacMacPage
