import { Icon } from '../Icon'
import { Col, Row } from 'antd'
import { find } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export const BreadcumbCustom = ({ listMenu, listHos }: any) => {
  const [postTitle, setpostTitle] = React.useState('')

  const router = useRouter()

  React.useEffect(() => {
    const postTitle = window.localStorage.getItem('postTitle') || ''
    console.log('postTitle :>> ', postTitle)
    setpostTitle(postTitle)
  }, [router.query])

  if (!listMenu) {
    return null
  }

  const {
    pathname,
    query: { site }
  } = router

  const path = pathname.replace('/[site]', '')
  const item = find(listMenu, { link: path })
  const listBreadcumb = []
  listBreadcumb.push({
    link: '/',
    label: 'Trang chủ'
  })

  if (site) {
    const hos = find(listHos, { partnerId: site })
    listBreadcumb.push({
      link: `/benh-vien`,
      label: 'Bệnh viện'
    })

    listBreadcumb.push({
      link: `/${site}/hinh-thuc-dat-kham`,
      label: hos?.name
    })
  }

  if (pathname === '/tin-tuc/[DetailsPost]') {
    listBreadcumb.push({
      link: `/tin-tuc`,
      label: 'Tin tức'
    })

    listBreadcumb.push({
      link: '/',
      label: postTitle
    })
  }
  listBreadcumb.push(item)

  return (
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
}
