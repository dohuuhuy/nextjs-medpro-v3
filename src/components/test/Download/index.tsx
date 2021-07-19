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
<<<<<<< HEAD
      <MyApp arrApp={dataDownload.myApp} />
      <Content
        listBenefit={dataDownload.listBenefit}
        imgMobile={dataDownload.imgMobile}
      />
=======
      <div className={Styles.header}>
        <div className={Styles.download}>DOWNLOAD</div>
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
>>>>>>> 57605be4a97a35a3bda2ad8c729e4fc3bbc5ceb8
    </div>
  )
}
