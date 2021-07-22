import React from 'react'
import { DefaultContent } from './organisms/MacDinh'
import { QuyTrinhContent } from './organisms/QuyTrinh'
import { ThacMacContent } from './organisms/ThacMac'

interface ContentPageCustom {
  getContent: any
}

export const ContentPageCustom: React.FC<ContentPageCustom> = ({
  getContent
}) => {
  if (!getContent) {
    return null
  }

  const { key, content } = getContent

  switch (key) {
    case 'thac-mac':
      return <ThacMacContent content={content} />

    case 'quy-trinh':
      return <QuyTrinhContent content={content} />

    default:
      return <DefaultContent content={content} />
  }
}
