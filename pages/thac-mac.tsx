import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))
const ThacMacDetail = dynamic(() => import('@components/page/ThacMacDetail'))

const ThacMacPage = () => {
  return <ThacMacDetail />
}

ThacMacPage.Layout = DefaultLayout
export default ThacMacPage
