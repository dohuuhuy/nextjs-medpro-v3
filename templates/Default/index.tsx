import { AnimatePage } from '@components/atoms/motion'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  appProps: any
}

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.introducHospital
  return (
    <Layout className={styles.layout}>
      {/* <Header {...info} /> */}
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
