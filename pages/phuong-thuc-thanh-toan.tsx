import { PaymentMethods } from '@componentsTest/PaymentMethods'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const PaymentMethodsPage = () => {
  return <PaymentMethods />
}

PaymentMethodsPage.Layout = DefaultLayout
export default PaymentMethodsPage
