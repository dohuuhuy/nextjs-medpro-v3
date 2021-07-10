import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content className={styles.content}>{children}</Content>

      <Footer />
    </Layout>
  )
}

export default DefaultLayout
