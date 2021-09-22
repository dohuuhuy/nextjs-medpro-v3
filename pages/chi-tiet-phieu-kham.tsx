import { DetailBooking } from '@componentsTest/DetailBooking'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  return <DetailBooking />
}

DetailBookingPage.Layout = DefaultLayout
export default DetailBookingPage
