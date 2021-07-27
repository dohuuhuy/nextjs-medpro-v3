import React from 'react'
import { DefaultContent } from './organisms/MacDinh'
import { QuyTrinhContent } from './organisms/QuyTrinh'
import { ThacMacContent } from './organisms/ThacMac'
import { LienHeContent } from './organisms/LienHe'

interface ContentPageCustom {
  getContent: any
}

export const ContentPageCustom = ({ getContent }: ContentPageCustom) => {
  const { checkDataInput, DataFailure } = require('./../DataFailure')
  if (checkDataInput(getContent)) {
    return <DataFailure description={'Lỗi không có data nội dung trang'} />
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
