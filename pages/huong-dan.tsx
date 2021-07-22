import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))
const HuongDanDetail = dynamic(() => import('@components/page/HuongDanDetail'))

const HuongDanPage = () => {
  useEffect(() => {}, [])

  return <HuongDanDetail />
}

HuongDanPage.Layout = DefaultLayout
export default HuongDanPage
