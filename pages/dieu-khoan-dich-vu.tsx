import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default/default'))

const LienHePage = () => {
  return <p>Dieud khoan dịc vu</p>
}

LienHePage.Layout = DefaultLayout
export default LienHePage
