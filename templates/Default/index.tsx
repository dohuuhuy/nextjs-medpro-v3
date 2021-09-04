import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerPage = dynamic(() => import('@components/organisms/Banner'))
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  info: any
}

const DefaultLayout = (props: Props) => {
  const { children, info } = props
  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <div className={styles.main}>
        <BannerPage {...info} />
        <HandlerGetContentPage {...info} />

        {children}
      </div>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
