import React, { useEffect } from 'react'
import { checkData } from '../DataFailure'
import { LienHeContent } from './organisms/LienHe'
import { DefaultContent } from './organisms/MacDinh'
import { QuyTrinhContent } from './organisms/QuyTrinh'
import { ThacMacContent } from './organisms/ThacMac'
interface Props {
  getContent: any
}

export const ContentPageCustom = ({ getContent }: Props) => {
  useEffect(() => {
    const element = document.querySelector('.viewBanner')
    var testElement = document.getElementsByClassName('viewBanner')
    console.log('element :>> ', element)
    console.log('testElement :>> ', testElement)
  }, [])

  if (checkData(getContent)) {
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
