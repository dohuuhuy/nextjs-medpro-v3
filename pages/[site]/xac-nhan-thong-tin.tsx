import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  return (
    <DefaultLayout>
      <ConfirmInfo />
    </DefaultLayout>
  )
}

export default ConfirmInfoPage
