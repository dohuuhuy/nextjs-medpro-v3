import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default/default'))
const QuyTrinhDetail = dynamic(() => import('@components/page/QuyTrinhDetail'))

const QuyTrinhPage = () => {
  useEffect(() => {}, [])

  return <QuyTrinhDetail />
}

QuyTrinhPage.Layout = DefaultLayout
export default QuyTrinhPage
