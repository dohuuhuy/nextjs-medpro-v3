import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default/default'))

const LienHePage = () => {
  return <p>chinh sach bao mat</p>
}

LienHePage.Layout = DefaultLayout
export default LienHePage
