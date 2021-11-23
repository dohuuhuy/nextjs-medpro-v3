import { Icon } from '@componentsTest/Icon'
import { Col, Row } from 'antd'
import { find } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export interface Breadcumb {
  listMenu?: any
  listHos?: any
  post?: any
  type: 'news' | 'booking' | 'normal'
}

export const BreadcumbCustom = ({
  post,
  listHos,
  type,
  listMenu
}: Breadcumb) => {
  const router = useRouter()
  const listBreadcumb = []

  const home = {
    link: '/',
    label: 'Trang chủ'
  }
  switch (type) {
    case 'news':
      listBreadcumb.push(home)

      listBreadcumb.push({
        link: `/tin-tuc`,
        label: 'Tin tức'
      })

      listBreadcumb.push({
        link: post?.slug,
        label: post?.title
      })
      break

    case 'booking':
      const { site } = router.query
      const findHospital = find(listHos, { partnerId: site })
      const path = router.pathname.replace('/[site]', '')

      const item = find(listMenu, { link: path })
      listBreadcumb.push(home)

      listBreadcumb.push({
        link: `/benh-vien`,
        label: 'Bệnh viện'
      })

      listBreadcumb.push({
        link: `/${site}/hinh-thuc-dat-kham`,
        label: findHospital?.name
      })

      if (item) {
        listBreadcumb.push(item)
      }
      break

    default:
      break
  }

  return (
    listBreadcumb && (
      <Container fluid={true} className={styles.wrapper}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col className={styles.col}>
              <ul className={styles.Breadcrumb}>
                {listBreadcumb?.map((v, i: number) => {
                  return (
                    v && (
                      <li className={styles.item} key={i}>
                        <Link href={v?.link || '#'}>
                          <a>{v?.label}</a>
                        </Link>
                        <Icon name='arrowLeft' size='10' />
                      </li>
                    )
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  )
}
