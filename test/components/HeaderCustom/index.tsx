import { Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import { Icon } from '../Icon'
import Container from './../Container'
import { HeaderIF } from './interface'
import styles from './styles.module.less'

export default function HeaderCustom(props: HeaderIF) {
  const { dataHeader } = props
  const { logo, menu } = dataHeader

  const glogo = logo?.desktop
  const [toggleSearch, settoggleSearch] = React.useState(false)

  const onSearch = () => {
    settoggleSearch(!toggleSearch)
  }

  const routePush = (v: any) => () => {
    router.push(v.link || '/')
  }
  return (
    <header>
      <Container fluid={true} fixed={true} className={styles.header}>
        <Container className={styles.containerHeader}>
          <Row className={styles.rowHeader}>
            <Col xl={6} lg={6} className={styles.colLogo}>
              <figure className={styles.logo}>
                <Link href={'/'}>
                  <a><Image src={glogo} width="275" height="75" layout='responsive' alt='' loading='lazy' /></a>
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
                    <li key={uniqueId()} onClick={routePush(v)}>
                      <Link href={v.link || '/'}>
                        <a aria-label={v?.label}>{v?.label}</a>
                      </Link>
                    </li>
                  )
                })}
                <li onClick={onSearch}>
                  <a className={cx(styles.btn)}>
                    <Icon name='timkiem' />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row
            className={cx(
              styles.rowSearch,
              toggleSearch ? styles.showSearch : styles.hiddenSearch
            )}
          >
            <Col xl={24} className={styles.colSearch}>
              <label className={styles.groupTimKiem}>
                <input
                  placeholder='Tìm Bác Sĩ, Phòng Mạch, Phòng Khám, Bệnh Viện ...'
                  className={styles.input}
                />
                <button className={styles.btnTim}>Tìm</button>
              </label>
            </Col>
          </Row>
        </Container>
      </Container>
    </header>
  )
}
