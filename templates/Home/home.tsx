import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'
const Footer = dynamic(() => import('@components/organisms/Footer'))
const Header = dynamic(() => import('@components/organisms/Header'))

type Props = {
  children?: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content className={styles.content}>{children}</Content>

      <Footer />
    </Layout>
  )
}

export default HomeLayout
