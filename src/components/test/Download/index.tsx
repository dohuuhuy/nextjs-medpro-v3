import { downloadApp } from '@components/organisms/DownloadApp'
import 'antd/dist/antd.css'
import React from 'react'
import { Content } from './content'
import { MyApp } from './myApp'
import Styles from './style.module.less'

interface DownloadCustom {
  dataDownload: downloadApp
}

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
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
