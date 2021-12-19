import { CreateForm } from '@componentsTest/CreateProfile'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TaoHoSoBenhNhan = () => {
  return <CreateForm />
}

TaoHoSoBenhNhan.Layout = DefaultLayout
export default TaoHoSoBenhNhan
