import { BookingBill } from '@componentsTest/BookingBill'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  return <BookingBill />
}

DetailBookingPage.Layout = DefaultLayout
export default DetailBookingPage
