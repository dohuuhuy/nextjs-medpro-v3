import { Icon } from '@componentsTest/Icon'
import { check } from '@utils/checkValue'
import { Col, Row } from 'antd'
import { find } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export const BreadcumbCustom = ({ listMenu, listHos, post }: any) => {
  const router = useRouter()
  const listBreadcumb = []

  const home = {
    link: '/',
    label: 'Trang chủ'
  }

  if (post) {
    listBreadcumb.push(home)

    listBreadcumb.push({
      link: `/tin-tuc`,
      label: 'Tin tức'
    })

    listBreadcumb.push({
      link: post?.slug,
      label: post?.title
    })
  } else {
    if (!listMenu) {
      return null
    }

    const {
      pathname,
      query: { site }
    } = router

    const path = pathname.replace('/[site]', '')
    const item = find(listMenu, { link: path })

    if (site) {
      const hos = find(listHos, { partnerId: site })
      listBreadcumb.push(home)

      listBreadcumb.push({
        link: `/benh-vien`,
        label: 'Bệnh viện'
      })

      listBreadcumb.push({
        link: `/${site}/hinh-thuc-dat-kham`,
        label: hos?.name
      })
      if (item) {
        listBreadcumb.push(item)
      }
    } else {
      if (item) {
        listBreadcumb.push(home)
        listBreadcumb.push(item)
      }
    }
  }

  if (check(listBreadcumb)) return null
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
