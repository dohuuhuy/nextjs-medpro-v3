import { BellOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PropsHeader } from './interface.header'
import styles from './styles.module.less'

export const HeaderCustom = (Props: PropsHeader) => {
  console.log('Props', Props)
  const { dataHeader } = Props
  const { logoHeader, menuHeader } = dataHeader
  return (
    <Header className={styles.header}>
      <Row>
        <Col xl='8'>
          <figure className={styles.logo}>
            <Link href='/'>
              <a>
                <Image src={logoHeader} alt='' width='230' height='80' />
              </a>
            </Link>
          </figure>
        </Col>
        <Col>menu</Col>
      </Row>
    </Header>
  )
}
