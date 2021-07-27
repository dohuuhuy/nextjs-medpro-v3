// import { ContentPageCustom } from '@n17dccn172/booking-libs'

import { ContentPageCustom } from '@componentsTest/ContentPageCustom'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const HandlerGetContentPage = () => {
  const contentPage = useSelector(
    (state: AppState) => state.hospital_Reducer.information.contentPage
  )

  const router = useRouter()

  const { pathname } = router

  const _pathname = pathname.replace('/', '')

  const getContent = find(contentPage, { key: _pathname })

  return <ContentPageCustom getContent={getContent} />
}

export default HandlerGetContentPage
