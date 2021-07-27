import { DownloadCustom } from '@n17dccn172/booking-libs'
import React from 'react'
import { useSelector } from 'react-redux'

const DownloadLayout = () => {
  const downloadApp = useSelector(
    (state: any) => state.hospital_Reducer.information.downloadApp
  )

  return <DownloadCustom dataDownload={downloadApp} />
}

export default DownloadLayout
