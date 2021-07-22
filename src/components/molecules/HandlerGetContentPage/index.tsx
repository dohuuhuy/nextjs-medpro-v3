import { ContentPageCustom } from '@components/test/ContentPageCustom'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const HandlerGetContentPage = () => {
  const contentPage = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.contentPage
  )

  const router = useRouter()

  const { pathname } = router

  const _pathname = pathname.replace('/', '')

  const getContent = find(contentPage, { key: _pathname })

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
