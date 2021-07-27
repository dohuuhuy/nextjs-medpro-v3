import { isEmpty } from 'lodash'
import React from 'react'
import Container from '../Container'
import { ListBenefit } from './ListBenefit'
import { MyApp } from './myApp'
import Styles from './style.module.less'

interface DownloadCustom {
  dataDownload: DownloadApp
}

export const DownloadCustom = ({ dataDownload }: DownloadCustom) => {
  if (!dataDownload || isEmpty(dataDownload)) {
    return <em> Không có dataDownload</em>
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
