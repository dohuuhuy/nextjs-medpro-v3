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
const News = dynamic(() => import('@components/organisms/NewsCustom'))
type Props = {
  children?: ReactNode
}
const HomeLayout = ({}: Props) => {
  return (
    <Layout className={styles.layout}>
      {/* <Header />
      <BannerContact />
      <BannerHome />
      <SliderHospital />
      <Introduce />
      <Download />
      <SupportMethod />
      <Produce /> */}
      <News />
    </Layout>
  )
}
export default HomeLayout
