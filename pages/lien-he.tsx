import React from 'react'
import dynamic from 'next/dynamic'
import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
const ContactLayout = dynamic(() => import('@templates/Contact'))

const LienHePage = () => {
  return <HandlerGetContentPage />
}

LienHePage.Layout = ContactLayout
export default LienHePage
