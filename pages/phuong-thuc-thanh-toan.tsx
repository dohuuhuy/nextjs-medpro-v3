import { PaymentMethods } from '@componentsTest/PaymentMethods'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as ac from '@actionStore'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const PaymentMethodsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.getAllPayment())
  }, [])
  return (
    <>
      <PaymentMethods />
    </>
  )
}

PaymentMethodsPage.layout = DefaultLayout

export default PaymentMethodsPage
