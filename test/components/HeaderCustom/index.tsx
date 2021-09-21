import { Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon'
import Container from './../Container'
import { PropsHeader } from './interface.header'
import { DrawerMenuHeader } from './responMobile/DrawerMenuHeader'
import { NavBottom } from './responMobile/NavBottom'
import styles from './styles.module.less'

export const HeaderCustom = (Props: PropsHeader) => {
  const { dataHeader, Authencation } = Props
  const { logo, menu } = dataHeader
  return (
    <Container fluid fixed className={styles.header}>
      <Container className={styles.containerHeader}>
        <Row className={styles.rowGroup}>
          <Col xl={24} className={styles.colGroup}>
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
          </Col>
        </Row>
        <Row className={styles.rowHeader}>
          <Col xl={5} className={styles.colLogo}>
            <figure className={styles.logo}>
              <Image src={logo.desktop} alt='' width='185' height='55' />
            </figure>
          </Col>
          <Col xl={19} className={styles.colBody}>
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

      <DrawerMenuHeader dataHeader={dataHeader} Authencation={Authencation} />

      <NavBottom dataHeader={dataHeader} Authencation={Authencation} />
    </Container>
  )
}
