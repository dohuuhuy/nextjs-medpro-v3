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
// const NewsPage = dynamic(() => import('@components/organisms/NewsPage'))
type Props = {
  children?: ReactNode
}
<<<<<<< HEAD
const HomeLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <NewsAndEvent />
      {/* <Header /> */}
      <BannerPage />
      <SliderHospital />
      <Introduce />
      <Download />
      <SupportMethod />
      {/* <NewsPage /> */}

      <Footer />
      {children}
=======
const HomeLayout = ({ }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      {/* <BannerContact />
      <BannerHome />
      <SliderHospital />
      <Introduce />
      <Download />
      <SupportMethod /> */}
      {/* <NewsPage /> */}
      {/* <News /> */}
>>>>>>> fbca0b1 (commit)
    </Layout>
  )
}
export default HomeLayout
