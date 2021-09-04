import { Information } from '@store/interface'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerPage = dynamic(() => import('@components/organisms/Banner'))
const SliderHospital = dynamic(
  () => import('@components/organisms/SilderHospital')
)
const Introduce = dynamic(() => import('@components/organisms/IntroduceApp'))
const Download = dynamic(() => import('@components/organisms/DownloadApp'))
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  appProps: Information
}

const HomeLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps.introducHospital

  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <BannerPage {...info} />
      <SliderHospital {...info} />
      <Introduce {...info} />
      <Download {...info} />
      {children}
      <SupportMethod {...info} />
      <Footer {...info} />
    </Layout>
  )
}
export default HomeLayout
