import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const GioiThieuDetail = dynamic(
  () => import('@components/page/GioiThieuDetail')
)

const GioiThieuPage = () => {
  return <GioiThieuDetail />
}

GioiThieuPage.Layout = DefaultLayout
export default GioiThieuPage
