// import { DownloadCustom } from '@medpro/booking-libs'
import { DownloadCustom } from '@componentsTest/DownloadApp'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const DownloadLayout = () => {
  const downloadApp = useSelector(
    (state: AppState) => state.hospitalReducer.information.downloadApp
  )

  return <DownloadCustom dataDownload={downloadApp} />
}

export default DownloadLayout
