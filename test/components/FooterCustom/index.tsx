import Container from '@componentsTest/Container'
import { Col, Row, Space } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import cx from 'classnames'
import { uniqueId } from 'lodash-es'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QRCode from 'react-qr-code'
import { FooterIF } from './interface'
import styles from './styles.module.less'

export const FooterCustom = (props: FooterIF) => {
  const { menu, logo, contact, downApp, certificate } = props

  return (
    <Footer className={styles.footer}>
      <Container className={styles.container}>
        <Row className={styles.rowMenu}>
          <Col span='24' className={styles.colMenu}>
            <ul className={styles.menu}>
              {menu.map((v) => {
                return (
                  <li key={uniqueId()}>
                    <Link href={v.link}>
                      <a>{v.label}</a>
                    </Link>
                  </li>
                )
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
          <Col span='10' className={styles.colContact}>
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
          <Col span='7' className={styles.colDown}>
            <p className={styles.title}>SCAN ĐỂ TẢI APP</p>

            <Space size={15}>
              <QRCode value={downApp.QRcode} size={90} />
              <ul className={styles.listApp}>
                {downApp.imageDownApp.map((v) => {
                  return (
                    <li key={uniqueId()}>
                      <Link href={v.link}>
                        <a target='_blank'>
                          <Image src={v.image} width='140' height='44' alt='' />
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Space>
          </Col>
          <Col span='7' className={styles.colCertifi}>
            <ul className={styles.listCer}>
              {certificate.list?.map((v) => {
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

            <ul className={styles.listImg}>
              {certificate.images.map((v) => {
                return (
                  <li key={uniqueId()}>
                    <Link href={v.link}>
                      <a target='_blank'>
                        <Image src={v.image} width='135' height='45' alt='' />
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
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
