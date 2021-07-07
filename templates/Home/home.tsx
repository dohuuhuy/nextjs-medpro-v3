import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content className={styles.content}>
        <div className={styles.siteLayout}>{children}</div>
      </Content>

      <Footer />
    </Layout>
  )
}

export default HomeLayout
