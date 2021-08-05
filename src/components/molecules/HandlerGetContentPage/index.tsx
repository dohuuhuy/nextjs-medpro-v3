// import { ContentPageCustom } from '@n17dccn172/booking-libs'

import { ContentPageCustom } from '@componentsTest/ContentPageCustom'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'

const HandlerGetContentPage = ({ contentPage }: any) => {
  const router = useRouter()

  const { pathname } = router

  const _pathname = pathname.replace('/', '')

  const getContent = find(contentPage, { key: _pathname })

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
