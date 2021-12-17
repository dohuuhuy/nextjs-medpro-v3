import { check } from '@src/utils/checkValue'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { LienHeContent } from './organisms/LienHe'
import { DefaultContent } from './organisms/MacDinh'
import { QuyTrinhContent } from './organisms/QuyTrinh'
import { ThacMacContent } from './organisms/ThacMac'
interface Props {
  listContent: any
}

export const ContentPageCustom = ({ listContent }: Props) => {
  const router = useRouter()

  if (!listContent) return null
  const { site } = router.query
  const getContent = find(listContent, { key: site })

  if (check(getContent)) {
    return null
  }

  const { key, content } = getContent

  switch (key) {
    case 'thac-mac':
      return <ThacMacContent content={content} />

    case 'quy-trinh':
      return <QuyTrinhContent content={content} />

    case 'lien-he':
      return <LienHeContent content={content} />

    default:
      return <DefaultContent content={content} />
  }
}
