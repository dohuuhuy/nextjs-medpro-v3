import Container from '@componentsTest/Container'
import { Row, Col, Space } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import { uniqueId } from 'lodash'
import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'
import Image from 'next/image'
const QRCode = require('qrcode.react')

interface Props {
  menu: Menu[]
  logo: Logo
  contact: Contact[]
  downApp: DownApp
  certificate: Certificate
}

interface Certificate {
  title: string
  value: string
  images: {
    id: string
    key: string
    image: string
    link: string
  }[]
}

interface DownApp {
  QRcode: string
  imageDownApp: {
    key: string
    image: string
    link: string
  }[]
}

interface Contact {
  id: string
  key: string
  label: string
  value: string
  setting: {
    status: boolean
    underline: boolean
    boolLabel: boolean
    boolValue: boolean
  }
}
interface Menu {
  label: string
  link: string
}

interface Logo {
  image: string
  name: string
}

export const FooterCustom = (props: Props) => {
  console.log(`props`, props)

  const { menu, logo, contact, downApp } = props

  return (
    <Footer className={styles.wapper}>
      <Container className={styles.container}>
        <Row className={styles.rowMenu}>
          <Col span='24' className={styles.colMenu}>
            <ul className={styles.menu}>
              {menu.map((v) => {
                return <li key={uniqueId()}>{v.label}</li>
              })}
            </ul>
          </Col>
        </Row>
        <Row className={styles.rowLogo}>
          <Col span='24' className={styles.colLogo}>
            <Space>
              <span>{logo.name}</span>
              <span>|</span>
              <Image src={logo.image} width='80' height='40' alt='' />
            </Space>
          </Col>
        </Row>
        <Row className={styles.rowBody}>
          <Col span='12' className={styles.colContact}>
            <ul className={styles.listContact}>
              {contact?.map((v) => {
                const under = v.setting.underline ? styles.underline : ''
                const label = v.setting?.boolLabel ? styles.bold : ''
                const value = v.setting?.boolValue ? styles.bold : ''
                return (
                  <li key={uniqueId()}>
                    <p>
                      <span className={cx(label, under)}>{v.label}</span>
                      <span className={value}>{v.value}</span>
                    </p>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col span='6' className={styles.colDown}>
            <p className={styles.title}>SCAN ĐỂ TẢI APP</p>
            <QRCode value='http://facebook.github.io/react/' />,
            <ul className={styles.listApp}>
              {downApp.imageDownApp.map((v) => {
                return (
                  <li key={uniqueId()}>
                    <Image src={v.image} width='140' height='44' alt='app' />
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col span='6' className={styles.colCertifi}></Col>
        </Row>
        <Row className={styles.rowCopy}>
          <Col span='24' className={styles.colCopy}>
            <p>@2021 Medpro Copyright. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
