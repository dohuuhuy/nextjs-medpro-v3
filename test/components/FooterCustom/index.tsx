import { Col, Row, Space } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QRCode from 'react-qr-code'
import Container from './../Container'
import styles from './styles.module.less'

export default function FooterCustom({ dataFooter }: any) {
  if (!dataFooter) {
    return null
  }
  const { menu, logo, contact, downApp, certificate } = dataFooter
  return (
    <Container tag='footer' fluid={true} className={styles.footer}>
      <Container className={styles.container}>
        <Row className={styles.rowMenu}>
          <Col xl={24} sm={24} className={styles.colMenu}>
            <ul className={styles.menu}>
              {menu.map((v: any) => {
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
          <Col xl={24} sm={24} className={styles.colLogo}>
            <div className={styles.glogo}>
              <span>{logo.name}</span>
              <span>|</span>
              <span>
                <Image src={logo.image} width='80' height='40' alt='' />
              </span>
            </div>
          </Col>
        </Row>
        <Row className={styles.rowBody}>
          <Col xl={10} sm={24} className={styles.colContact}>
            <ul className={styles.listContact}>
              {contact?.map((v: any) => {
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
          <Col xl={7} lg={12} md={12} sm={24} className={styles.colDown}>
            <p className={styles.title}>SCAN ĐỂ TẢI APP</p>

            <Space size={15}>
              <QRCode value={downApp.QRcode} size={90} />
              <ul className={styles.listApp}>
                {downApp.imageDownApp.map((v: any) => {
                  return (
                    <li key={uniqueId()}>
                      <Link href={v.link}>
                        <a target='_blank'>
                          <Image
                            src={v?.image}
                            width='140'
                            height='44'
                            alt=''
                          />
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Space>
          </Col>
          <Col xl={7} lg={12} md={12} sm={24} className={styles.colCertifi}>
            <ul className={styles.listCer}>
              {certificate.list?.map((v: any) => {
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
              {certificate.images.map((v: any) => {
                return (
                  <li key={uniqueId()}>
                    <Link href={v.link}>
                      <a target='_blank'>
                        <Image src={v?.image} width='135' height='45' alt='' />
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className={styles.rowCopy}>
        <Col xl={24} sm={24} className={styles.colCopy}>
          <p>@2021 Medpro Copyright. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  )
}
