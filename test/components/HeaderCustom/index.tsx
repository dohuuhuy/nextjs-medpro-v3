import { Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon'
import Container from './../Container'
import { PropsHeader } from './interface.header'
import styles from './styles.module.less'

export const HeaderCustom = (Props: PropsHeader) => {
  const { dataHeader } = Props
  const { logo, menu } = dataHeader
  return (
    <Container fluid fixed className={styles.header}>
      <Container className={styles.containerHeader}>
        <Row className={styles.rowHeader}>
          <Col xl={6} className={styles.colLogo}>
            <figure className={styles.logo}>
              <Link href={'/'}>
                <a>
                  <Image src={logo?.desktop} alt='' width='250' height='75' />
                </a>
              </Link>
            </figure>
          </Col>
          <Col xl={18} className={styles.colBody}>
            <ul className={styles.groupBtn}>
              <li>
                <button className={cx(styles.btn)}>
                  <Icon name='cskh' />
                  Chăm sóc khách hàng
                </button>
              </li>
              <li>
                <button className={cx(styles.btn)}>
                  <Icon name='thongbao' />
                  Thông báo
                </button>
              </li>
              <li>
                <button className={cx(styles.btn)}>Đăng nhập | Đăng ký</button>
              </li>
            </ul>

            <ul className={styles.listMenu}>
              {menu.map((v) => {
                return (
                  <li key={uniqueId()}>
                    <Link href={v.link || '/'}>
                      <a aria-label={v?.label}>{v?.label}</a>
                    </Link>
                  </li>
                )
              })}
              <li>
                <a className={cx(styles.btn)}>
                  <Icon name='timkiem' />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
