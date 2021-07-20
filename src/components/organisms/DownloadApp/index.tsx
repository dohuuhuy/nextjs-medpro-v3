import { DownloadCustom } from '@components/test/Download'
import React from 'react'
import { useSelector } from 'react-redux'

const DownloadLayout = () => {
  const downloadApp = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.downloadApp
  )

  return <DownloadCustom dataDownload={downloadApp} />
}

export default DownloadLayout
