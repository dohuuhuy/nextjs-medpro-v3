import { SelectProfilePage } from '@components/pages/SelectProfilePage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonHoSoPage = () => {
  return <SelectProfilePage />
}

ChonHoSoPage.Layout = DefaultLayout
export default ChonHoSoPage