import { SelectCalendarPage } from '@components/pages/SelectCalendarPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonLichKhamPage = () => {
  return <SelectCalendarPage />
}

ChonLichKhamPage.Layout = DefaultLayout
export default ChonLichKhamPage
