import React from 'react'
import dynamic from 'next/dynamic'
import { SelectPaymentsPage } from '@components/pages/SelectPaymentsPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucThanhToanPage = () => {
  return <SelectPaymentsPage />
}

HinhThucThanhToanPage.Layout = DefaultLayout
export default HinhThucThanhToanPage