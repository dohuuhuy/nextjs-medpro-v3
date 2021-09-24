import { Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon'
import Container from './../Container'
import { HeaderIF } from './interface'
import styles from './styles.module.less'

export const HeaderCustom = (props: HeaderIF) => {
  const { dataHeader } = props
  const { logo, menu } = dataHeader

  const glogo = logo?.desktop

  return (
    <header>
      <Container fluid={true} fixed={true} className={styles.header}>
        <Container className={styles.containerHeader}>
          <Row className={styles.rowHeader}>
            <Col xl={6} lg={6} className={styles.colLogo}>
              <figure className={styles.logo}>
                <Link href={'/'}>
                  <a>
                    <Image src={glogo} layout='fill' objectFit='cover' alt='' />
                  </a>
                </Link>
              </figure>
            </Col>
            <Col xl={18} lg={18} sm={24} className={styles.colBody}>
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
                  <button className={cx(styles.btn)}>
                    Đăng nhập | Đăng ký
                  </button>
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
    </header>
  )
}
