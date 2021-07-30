import React from 'react'
import Container from '../Container'
import { MyApp } from './organisms/myApp'
import styles from './style.module.less'

interface DownloadCustom {
  dataDownload: DownloadApp
}

export interface DownloadApp {
  appId: string
  nameHospital: string
  myApp: any[]
  imgMobile: string
  listBenefit: any[]
}

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
  const { checkData, DataFailure } = require('./../DataFailure')
  if (checkData(dataDownload)) {
    return <DataFailure description={'Lỗi không có data tải ứng dụng'} />
  }
  return (
    <Container className={styles.DownloadCustom} id='tai-ung-dung'>
      <MyApp arrApp={dataDownload.myApp} />
      {/* <ListBenefit
        listBenefit={dataDownload.listBenefit}
        imgMobile={dataDownload.imgMobile}
      /> */}
    </Container>
  )
}
