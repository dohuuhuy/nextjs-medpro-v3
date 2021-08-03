import { DetailsNews } from '@components/organisms/DetailNews'
import dynamic from 'next/dynamic'
import React from 'react'
import { useRouter } from 'next/router'

const DefaultLayout = dynamic(() => import('@templates/Default'))


const DetailsPostPage = () => {
  const router = useRouter()
  const { DetailsPost } = router.query
  return <DetailsNews dataslug={DetailsPost} />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage