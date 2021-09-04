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
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  info: Information
}

const HomeLayout = (props: Props) => {
  const { children, info } = props

  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <BannerPage {...info} />
      <SliderHospital {...info} />
      <Introduce {...info} />
      <Download {...info} />
      <NewsAndEvent />
      <SupportMethod {...info} />
      <Footer {...info} />
      {children}
    </Layout>
  )
}
export default HomeLayout
