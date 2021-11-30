import { DownloadCustom } from '@componentsTest/DownloadApp'
import { Information } from '@src/store/interface'
import React from 'react'

const DownloadLayout = (info: Information) => {
  return <DownloadCustom dataDownload={info.downloadApp} />
}

export default DownloadLayout
