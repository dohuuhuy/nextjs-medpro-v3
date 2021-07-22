import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerPage = dynamic(() => import('@components/organisms/Banner'))

const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
}

const ContactLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <BannerPage />
      {children}
      <Footer />
    </Layout>
  )
}

export default ContactLayout
