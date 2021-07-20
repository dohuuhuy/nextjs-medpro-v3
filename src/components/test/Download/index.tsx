import { DownloadApp } from './DownloadApp.interface'
import React from 'react'
import { Content } from './content'
import { MyApp } from './myApp'
import Styles from './style.module.less'

interface DownloadCustom {
  dataDownload: DownloadApp
}

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
  if (!dataDownload) return <em>Lỗi data input</em>
  return (
    <div className={Styles.container}>
      <MyApp arrApp={dataDownload.myApp} />
      <Content
        listBenefit={dataDownload.listBenefit}
        imgMobile={dataDownload.imgMobile}
      />
    </div>
  )
}
