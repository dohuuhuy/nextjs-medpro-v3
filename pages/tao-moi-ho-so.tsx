import { TaoHoSo } from '@componentsTest/CreateProfile'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TaoHoSoPage = () => {
  return <TaoHoSo />
}

TaoHoSoPage.Layout = DefaultLayout
export default TaoHoSoPage