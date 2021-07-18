import { downloadApp } from '@components/organisms/DownloadApp'
import 'antd/dist/antd.css'
import React from 'react'
import { Content } from './content'
import { MyApp } from './myApp'
import Styles from './style.module.less'

interface DownloadCustom {
  dataDownload: downloadApp
}

// chổ nào có 2 trường hợp ,
// v phải xử lýlyswitch case
// cass appId = 'medpro'

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.download}>DOWNLOAD</div>
        //
        <div className={Styles.header_title}>
          TẢI ỨNG DỤNG <span>MEDPRO</span>
        </div>
        <MyApp arrApp={dataDownload.myApp} />
      </div>
      <div className={Styles.content}>
        <div className={Styles.div_background}>
          <div className={Styles.background} />
        </div>
        <Content
          listBenefit={dataDownload.listBenefit}
          imgMobile={dataDownload.imgMobile}
        />
      </div>
    </div>
  )
}
