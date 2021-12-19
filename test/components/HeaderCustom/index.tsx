import { Badge, Col, Dropdown, Row } from 'antd'
import cx from 'classnames'
import { filter, uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { Icon } from '../Icon'
import Container from './../Container'
import { Infomation } from './common/infomation'
import { ListNoti } from './common/listNoti'
import styles from './styles.module.less'

export interface HeaderCustomIF {
  dataHeader: any
  loginMedproId: any
  loginAt: any
  author: any
  noti: any
  readNoti: any
  partnerId: string
}

export default function HeaderCustom(props: HeaderCustomIF) {
  const {
    dataHeader,
    loginMedproId,
    loginAt,
    author,
    noti,
    readNoti,
    partnerId
  } = props

  const router = useRouter()
  const dispatch = useDispatch()
  const [toggleSearch, settoggleSearch] = React.useState(false)

  if (!dataHeader) {
    return null
  }

  const { menu } = dataHeader
  // const glogo = logo?.desktop

  const onSearch = () => {
    settoggleSearch(!toggleSearch)
  }

  const routePush = (v: any) => () => {
    router.push(v.link || '/')
  }

  const handleLogin = () => {
    dispatch(loginMedproId())
  }

  const handleLogOut = () => {
    dispatch(loginAt(router.asPath))
    router.push('/dang-xuat')
  }

  const noRep = filter(noti, { isRead: false })

  const logo = `https://resource-testing.medpro.com.vn/static/images/${partnerId}/web/header_logo.svg?t=37461.93270345496`

  return (
    <Container tag='header' fluid={true} fixed={true} className={styles.header}>
      <Container className={styles.containerHeader}>
        <Row className={styles.rowHeader}>
          <Col xl={6} lg={6} className={styles.colLogo}>
            <figure className={styles.logo}>
              <Link href={'/'}>
                <a>
                  <Image
                    src={logo}
                    width='275'
                    height='75'
                    layout='responsive'
                    alt=''
                    loading='eager'
                  />
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
              {author.token && (
                <li>
                  <Dropdown
                    overlay={<ListNoti list={noti} readNoti={readNoti} />}
                  >
                    <Badge count={noRep.length}>
                      <button
                        className={cx(
                          styles.btn,
                          noRep.length > 0 && styles.ringBell
                        )}
                      >
                        <Icon
                          name='thongbao'
                          fill={noRep.length > 0 && 'red'}
                        />
                        Thông báo
                      </button>
                    </Badge>
                  </Dropdown>
                </li>
              )}
              {!author.token && (
                <li>
                  <button className={cx(styles.btn)} onClick={handleLogin}>
                    Đăng nhập | Đăng ký
                  </button>
                </li>
              )}
              {author.token && (
                <li>
                  <Dropdown
                    overlay={
                      <Infomation
                        handleLogOut={handleLogOut}
                        data={author?.fullName}
                      />
                    }
                  >
                    <button className={cx(styles.btn, styles.btnLogin)}>
                      <BiUserCircle size={20} />
                      <p>{author?.fullName}</p>
                    </button>
                  </Dropdown>
                </li>
              )}
            </ul>

            <ul className={styles.listMenu}>
              {menu?.map((v: any) => {
                return (
                  <li
                    key={uniqueId()}
                    onClick={routePush(v)}
                    className={
                      router.asPath.includes(v.link) ? styles.active : ''
                    }
                  >
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
  )
}
