/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import React from 'react'
import style from './style.module.less'
import cx from 'classnames'

interface myApp {
  arrApp: Item[]
}
interface Item {
  id: string
  key: string
  imgLogo: string
  link: string
}

export const MyApp = ({ arrApp }: myApp) => {
  return (
    <Row className={style.MyApp}>
      <Col xl={24} md={24} sm={24} className={style.ColMyApp}>
        <span className={style.download}> DOWNLOAD</span>
      </Col>
      <Col
        className={cx(style.header_title, style.ColMyApp)}
        xl={24}
        md={24}
        sm={24}
      >
        TẢI ỨNG DỤNG <span>MEDPRO</span>
      </Col>
      <Col xl={24} md={24} sm={24} className={style.ColMyApp}>
        <ul className={style.listDownload}>
          {arrApp?.map(({ imgLogo, link }: Item, index: number) => (
            <li key={index}>
              <a href={link} target='_blank' rel='noreferrer'>
                <img src={imgLogo} className={style.mid_logo} alt='' />
              </a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
