import { AnimatePage } from '@components/atoms/motion'
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
          <BannerPage {...info} />
          <HandlerGetContentPage {...info} />

          {children}
        </AnimatePage>
      </div>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
