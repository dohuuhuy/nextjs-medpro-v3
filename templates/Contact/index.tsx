import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerContact = dynamic(
  () => import('@components/organisms/BannerContact')
)

const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
}

const ContactLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <BannerContact />
      {children}
      <Footer />
    </Layout>
  )
}

export default ContactLayout
