import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const Download = dynamic(() => import('@components/organisms/DownloadApp'))
const Footer = dynamic(() => import('@components/organisms/Footer'))

const HomeLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Download />
      <Footer />
    </Layout>
  )
}

export default HomeLayout
