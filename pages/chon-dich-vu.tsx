import { SelectServicePage } from '@components/pages/SelectServicePage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonDichVuPage = () => {
  return <SelectServicePage />
}

ChonDichVuPage.Layout = DefaultLayout
export default ChonDichVuPage
