import { BookingBill } from '@componentsTest/BookingBill'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  return (
    <>
      <BreadcumbCustom type='booking' />
      <BookingBill />
    </>
  )
}

DetailBookingPage.Layout = DefaultLayout
export default DetailBookingPage
