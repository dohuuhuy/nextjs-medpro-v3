/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import React from 'react'
import style from './style.module.less'

interface myApp {
  arrApp: Item[]
}
interface Item {
  key: string
  imgApp: string
  linkApp: string
}

export const MyApp = ({ arrApp }: myApp) => {
  return (
    <Row className={style.MyApp}>
      <Col xl={24}>
        <span className={style.download}> DOWNLOAD</span>
      </Col>
      <Col className={style.header_title} xl={24}>
        TẢI ỨNG DỤNG <span>MEDPRO</span>
      </Col>
      <Col xl={24}>
        <ul className={style.listDownload}>
          {arrApp.map(({ imgApp, linkApp }: Item, index: number) => (
            <li key={index}>
              <a href={linkApp} target='_blank' rel='noreferrer'>
                <img src={imgApp} className={style.mid_logo} alt='' />
              </a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
