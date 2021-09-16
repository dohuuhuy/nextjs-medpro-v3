import React from 'react'
import { PropsHeader } from './interface.header'
import { Row, Col } from 'antd'
import styles from './styles.module.less'
import { uniqueId } from 'lodash'
import Link from 'next/link'
import Image from 'next/image'
import { CustomerServiceOutlined, BellOutlined } from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { DrawerMenuHeader } from './responMobile/DrawerMenuHeader'
import { NavBottom } from './responMobile/NavBottom'

export const HeaderCustom = (Props: PropsHeader) => {
  const { Authencartion, dataHeader } = Props
  const { logoHeader, menuHeader, menuMobile } = dataHeader
  return (
    <div>
      <Container className={styles.header}>
        <Row>
          <Col xl={6} className={styles.colLogo}>
            <figure className={styles.figureLogoHeader}>
              <Link href='/'>
                <a>
                  <Image
                    src={logoHeader}
                    alt=''
                    width='230'
                    height='80'
                  />
                </a>
              </Link>
            </figure>
          </Col>
          <Col xl={18} className={styles.colContent}>
            <Row className={styles.rowInfo}>
              <ul className={styles.listInfo}>
                <li>
                  <div className={styles.CustomerService}>
                    <a>
                      <CustomerServiceOutlined />
                      Chăm sóc khách hàng
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.Notification}>
                    <a>
                      <BellOutlined />
                      Thông báo
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.Login}>
                    <a>Đăng nhập</a> | <a>Đăng kí</a>
                  </div>
                </li>
              </ul>
            </Row>
            <Row className={styles.rowMenu}>
              <ul className={styles.listMenu}>
                {menuHeader.map((item) => {
                  return (
                    <li key={uniqueId()}>
                      <Link href={item.link || '/'}>
                        <a aria-label={item?.label}>{item?.label}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>

      <DrawerMenuHeader dataHeader={dataHeader} Authencartion={Authencartion} />

      <NavBottom dataHeader={dataHeader} Authencartion={Authencartion} />

    </div>
  )
}
