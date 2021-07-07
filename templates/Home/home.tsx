import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@components/organisms/Footer'))
const Header = dynamic(() => import('@components/organisms/Header'))

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
