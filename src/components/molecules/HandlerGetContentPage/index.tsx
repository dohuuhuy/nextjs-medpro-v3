import { ContentPageCustom } from '@componentsTest/ContentPageCustom'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'

const HandlerGetContentPage = ({ dataContent }: any) => {
  const router = useRouter()

  if (!dataContent) return null
  const { site } = router.query
  const getContent = find(dataContent, { key: site })
  if (!getContent) return null

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
