import { ThongTinHoSoPage } from '@components/pages/ThongTinHoSoPage'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinHoSo = () => {
  return <ThongTinHoSoPage />
}

ThongTinHoSo.Layout = DefaultLayout
export default ThongTinHoSo