import React from 'react'
import { DefaultContent } from './organisms/MacDinh'
import { QuyTrinhContent } from './organisms/QuyTrinh'

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
    case 'quy-trinh':
      return <QuyTrinhContent content={content} />

    default:
      return <DefaultContent content={content} />
  }
}
