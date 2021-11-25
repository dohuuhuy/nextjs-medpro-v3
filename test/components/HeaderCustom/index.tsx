import { Icon } from '@componentsTest/Icon'
import { Badge, Card, Col, Dropdown, Menu, Row } from 'antd'
import cx from 'classnames'
import { filter, uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaBell, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Container from './../Container'
import styles from './styles.module.less'

export default function HeaderCustom({
  dataHeader,
  loginMedproId,
  author,
  noti
}: any) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [toggleSearch, settoggleSearch] = React.useState(false)

  const noRep = filter(noti, { isRead: false })

  if (!dataHeader) {
    return null
  }

  const { logo, menu } = dataHeader

  const glogo = logo?.desktop

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
    router.push('/dang-xuat')
  }

  const menus = (
    <Card
      title={
        <h3 className={styles.cardTitle}>
          <FaBell />
          <span>Danh sách thông báo</span>
        </h3>
      }
      bordered={false}
      style={{ width: 500 }}
    >
      <Menu className={styles.listNoti}>
        {noti?.slice(0, 5)?.map((v: any) => {
          return (
            <Menu.Item
              key={v.id}
              icon={
                v.isRead ? (
                  <FaEnvelopeOpen size='18' color='gray' />
                ) : (
                  <FaEnvelope size='18' color='orangered' />
                )
              }
            >
              <Link
                href={`/chi-tiet-phieu-kham?transactionId=${v.eventData.transactionId}`}
              >
                <a>{v.title}</a>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Card>
  )

  return (
    <header>
      <Container fluid={true} fixed={true} className={styles.header}>
        <Container
          className={styles.containerHeader}
          style={{ maxWidth: '1280px' }}
        >
          <Row className={styles.rowHeader}>
            <Col xl={6} lg={6} className={styles.colLogo}>
              <figure className={styles.logo}>
                <Link href={'/'}>
                  <a>
                    <Image
                      src={glogo}
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
                    <Dropdown overlay={menus}>
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
                    <button className={cx(styles.btn, styles.btnLogin)}>
                      {author?.fullName}
                    </button>
                  </li>
                )}

                {author.token && (
                  <li>
                    <button className={cx(styles.btn)} onClick={handleLogOut}>
                      Đăng xuất
                    </button>
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
    </header>
  )
}
