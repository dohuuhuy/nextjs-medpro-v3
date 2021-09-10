import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.less'

export interface MyApp {
  arrApp: Item[]
}
export interface Item {
  id: string
  key: string
  imgLogo: string
  link: string
}

export const MyApp = ({ arrApp }: MyApp) => {
  return (
    <Row className={styles.MyApp}>
      <Col span='24' className={styles.ColMyApp}>
        <span className={styles.download}> DOWNLOAD</span>
      </Col>
      <Col span='24' className={cx(styles.header_title, styles.ColMyApp)}>
        <h1>
          TẢI ỨNG DỤNG <span>MEDPRO</span>
        </h1>
      </Col>
      <Col span='24' className={styles.ColMyApp}>
        <ul className={styles.listDownload}>
          {arrApp?.map(({ imgLogo, link }: Item, index: number) => (
            <li key={index}>
              <a href={link} target='_blank' rel='noreferrer'>
                <img src={imgLogo} className={styles.mid_logo} alt='' />
              </a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
