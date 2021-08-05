import { SelectSpecialistPage } from '@components/pages/SelectSpecialistPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonChuyenKhoaPage = () => {
  return <SelectSpecialistPage />
}

ChonChuyenKhoaPage.Layout = DefaultLayout
export default ChonChuyenKhoaPage