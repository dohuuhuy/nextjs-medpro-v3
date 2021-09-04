import React from 'react'
import Container from '../Container'
import { Benefit } from './organisms/Benefit'
import { MyApp } from './organisms/myApp'
import { DataFailure, checkData } from '../DataFailure'
import styles from './styles.module.less'

export interface DownloadCustom {
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
  if (checkData(dataDownload)) {
    return <DataFailure desc={'Lỗi không có data tải ứng dụng'} />
  }
  return (
    <Container className={styles.DownloadCustom} id='tai-ung-dung'>
      <MyApp arrApp={dataDownload.myApp} />
      <Benefit
        listBenefit={dataDownload.listBenefit}
        imgMobile={dataDownload.imgMobile}
      />
    </Container>
  )
}
