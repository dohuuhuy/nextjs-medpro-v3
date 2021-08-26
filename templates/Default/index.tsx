import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerPage = dynamic(() => import('@components/organisms/Banner'))
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  state: any
}

const DefaultLayout = (props: Props) => {
  const { children } = props
  return (
    <Layout className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <BannerPage />

        {children}
      </div>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout
