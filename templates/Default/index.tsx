import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: any
}

const BannerPage = dynamic(() => import('@components/organisms/Banner'))

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.info
  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <main className={styles.main}>
        <BannerPage {...info} />
        <HandlerGetContentPage {...info} />

        <main>{children}</main>
      </main>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
