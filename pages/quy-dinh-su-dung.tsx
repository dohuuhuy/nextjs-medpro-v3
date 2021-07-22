import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return <p>quy dinh sử dụng</p>
}

LienHePage.Layout = DefaultLayout
export default LienHePage
