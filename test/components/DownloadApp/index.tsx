import React from 'react'
import Container from '../Container'
import { ListBenefit } from './ListBenefit'
import { MyApp } from './myApp'
import Styles from './style.module.less'

interface DownloadCustom {
  dataDownload: DownloadApp
}

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
  const { checkData, DataFailure } = require('./../DataFailure')
  if (checkData(dataDownload)) {
    return <DataFailure description={'Lỗi không có data tải ứng dụng'} />
  }
  return (
    <Container className={Styles.DownloadCustom} id='tai-ung-dung'>
      <MyApp arrApp={dataDownload.myApp} />
      <ListBenefit
        listBenefit={dataDownload.listBenefit}
        imgMobile={dataDownload.imgMobile}
      />
    </Container>
  )
}

export interface DownloadApp {
  appId: string
  nameHospital: string
  myApp: any[]
  imgMobile: string
  listBenefit: any[]
}
