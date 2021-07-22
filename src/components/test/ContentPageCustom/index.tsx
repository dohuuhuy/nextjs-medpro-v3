import React from 'react'
import Container from '../Container'
import { GioiThieuContent } from './organisms/GioiThieu'
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
    case 'gioi-thieu':
      return <GioiThieuContent content={content} />

    case 'quy-trinh':
      return <QuyTrinhContent content={content} />

    default:
      return (
        <Container>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      )
  }
}
