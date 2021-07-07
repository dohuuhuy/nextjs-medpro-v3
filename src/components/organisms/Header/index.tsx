import Container from '@components/atoms/Container'
import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import BreadcrumbLayout from '../Breadcrumb'
import styles from './styles.module.less'

const HeaderLayout = () => {
  return (
    <Container fixed fluid>
      <Header className={styles.header}>
        {/* <div className="logo" /> */}
        <Container>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <BreadcrumbLayout />
        </Container>
      </Header>
    </Container>
  )
}

export default HeaderLayout
