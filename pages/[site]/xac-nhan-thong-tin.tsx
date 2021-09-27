import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  return <ConfirmInfo />
}

ConfirmInfoPage.Layout = DefaultLayout
export default ConfirmInfoPage
