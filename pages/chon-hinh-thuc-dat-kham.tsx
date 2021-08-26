import { SelectBookingTypePage } from '@components/pages/SelectBookingTypePage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonHinhThucDatKhamPage = () => {
  return <SelectBookingTypePage />
}

ChonHinhThucDatKhamPage.Layout = DefaultLayout
export default ChonHinhThucDatKhamPage