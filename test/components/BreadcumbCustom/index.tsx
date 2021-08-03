import { checkData } from '@componentsTest/DataFailure'
import { Breadcrumb, Col, Row } from 'antd'
import { find } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import style from './styles.module.less'

export const BreadcumbCustom = ({ listMenu }: any) => {
  if (checkData(listMenu)) {
    return null
  }

  const router = useRouter()

  const { pathname } = router

  const item = find(listMenu, { link: pathname })

  const listBreadcumb = [].concat(listMenu.shift(), item)

  return (
    <div className={style.wapperBreadcumbCustom}>
      <Container className={style.containerBreadcumbCustom}>
        <Row className={style.rowBreadcumbCustom}>
          <Col className={style.colBreadcumbCustom}>
            <Breadcrumb separator='>' className={style.Breadcrumb}>
              {listBreadcumb?.map(({ link, label }: any, i: number) => {
                return (
                  <Breadcrumb.Item className={style.ItemBreadcrumb} key={i}>
                    <Link href={link || '#'}>
                      <a>{label || ''}</a>
                    </Link>
                  </Breadcrumb.Item>
                )
              })}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
