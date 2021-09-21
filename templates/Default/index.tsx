import { AnimatePage } from '@components/atoms/motion'
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

  const info = appProps?.introducHospital
  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <div className={styles.main}>
        <AnimatePage>
          {/* <BannerPage {...info} />
          <HandlerGetContentPage {...info} /> */}

          {children}
        </AnimatePage>
      </div>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
