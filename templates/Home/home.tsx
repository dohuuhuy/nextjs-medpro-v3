import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const DownloadApp = dynamic(() => import('@components/organisms/DownloadApp'))
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      {/* <Header /> */}
      <DownloadApp />
      {children}
      {/* <Footer /> */}
    </Layout>
  )
}

export default HomeLayout
