import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import Banners from '@components/organisms/Banner'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: any
}

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.info
  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <main className={styles.main}>
        <Banners {...info} />
        {/* lỗi get contentpage , đụ xị tốn thời gian tìm vl */}

        <HandlerGetContentPage {...info} />

        <main>{children}</main>
      </main>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
