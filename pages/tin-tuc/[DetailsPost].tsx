import { DetailsNews } from '@components/organisms/DetailNews'
import dynamic from 'next/dynamic'
import React from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))


const DetailsPostPage = () => {
  return <DetailsNews />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage