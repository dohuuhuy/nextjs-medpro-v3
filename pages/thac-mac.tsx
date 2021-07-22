import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThacMacPage = () => {
  return <HandlerGetContentPage />
}

ThacMacPage.Layout = DefaultLayout
export default ThacMacPage
