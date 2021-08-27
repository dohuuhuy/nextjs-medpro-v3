import { AppState } from '@store/interface'
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
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  state: AppState
}

const HomeLayout = (props: Props) => {
  const { children } = props

  return (
    <Layout className={styles.layout}>
      <Header />
      <BannerPage />
      <SliderHospital />
      <Introduce />
      <Download />
      <NewsAndEvent />
      <SupportMethod />
      <Footer />
      {children}
    </Layout>
  )
}
export default HomeLayout
