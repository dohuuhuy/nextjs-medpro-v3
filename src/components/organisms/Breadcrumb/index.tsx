import { Breadcrumb } from 'antd'
import React from 'react'
import styles from './styles.module.less'

const BreadcrumbLayout = () => {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbLayout
