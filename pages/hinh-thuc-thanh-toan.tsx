import { SelectPaymentsPage } from '@components/pages/SelectPaymentsPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucThanhToanPage = () => {
  return <SelectPaymentsPage />
}

HinhThucThanhToanPage.Layout = DefaultLayout
export default HinhThucThanhToanPage
