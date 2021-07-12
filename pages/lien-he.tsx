import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default/default'))
const LienHeDetail = dynamic(() => import('@components/page/LienHeDetail'))

const LienHePage = () => {
  return <LienHeDetail />
}

LienHePage.Layout = DefaultLayout
export default LienHePage
