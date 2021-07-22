import React from 'react'
import dynamic from 'next/dynamic'
const ContactLayout = dynamic(() => import('@templates/Contact'))
const LienHeDetail = dynamic(() => import('@components/page/LienHeDetail'))

const LienHePage = () => {
  return <LienHeDetail />
}

LienHePage.Layout = ContactLayout
export default LienHePage
