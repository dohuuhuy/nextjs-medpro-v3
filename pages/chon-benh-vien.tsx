import React from 'react'
import dynamic from 'next/dynamic'
import SelectHospitalPage from '@components/pages/SelectHospitalPage'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = () => {
  return <SelectHospitalPage />
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
