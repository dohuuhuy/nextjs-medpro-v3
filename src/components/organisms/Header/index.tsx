/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import Container from '@components/atoms/Container'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
const BreadcrumbLayout = dynamic(() => import('../Breadcrumb'))
// // const MenuLayout = dynamic(() => import('../Menu'), {
//   loading: () => <p>...</p>,
// })
import styles from './styles.module.less'

const HeaderLayout = () => {
  return (
    <Container fluid>
      <Header className={styles.header}>
        <Container>
          <div>logo</div>
          {/* <MenuLayout /> */}
          <BreadcrumbLayout />
        </Container>
      </Header>
    </Container>
  )
}

export default HeaderLayout
