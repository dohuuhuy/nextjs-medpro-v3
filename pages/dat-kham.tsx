import { DatKham } from '@componentsTest/DatKham'
import dynamic from 'next/dynamic'
import React from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = () => {
  return <DatKham />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage