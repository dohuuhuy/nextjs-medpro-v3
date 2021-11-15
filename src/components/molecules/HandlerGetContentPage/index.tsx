import { ContentPageCustom } from '@componentsTest/ContentPageCustom'
import { Information } from 'store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
const HandlerGetContentPage = (info: Information) => {
  const router = useRouter()

  const {
    query: { site }
  } = router

  const getContent = find(info.contentPage, { key: site })

  if (!getContent) {
    return null
  }

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
