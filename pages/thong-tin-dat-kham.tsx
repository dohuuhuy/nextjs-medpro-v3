import BookingInformationPage from '@components/pages/BookingInformationPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = () => {
  return <BookingInformationPage />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
