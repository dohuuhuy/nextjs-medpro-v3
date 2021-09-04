import { ContentPageCustom } from '@componentsTest/ContentPageCustom'
import { Information } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
const HandlerGetContentPage = (info: Information) => {
  const router = useRouter()

  const { pathname } = router

  const _pathname = pathname.replace('/', '')

  const getContent = find(info.contentPage, { key: _pathname })

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
