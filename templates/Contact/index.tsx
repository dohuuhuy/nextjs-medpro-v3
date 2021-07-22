import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerHome = dynamic(() => import('@components/organisms/BannerHome'))
const Banner = dynamic(() => import('@components/organisms/Banner'))
const BannerContact = dynamic(
  () => import('@components/organisms/BannerContact')
)
const Produce = dynamic(() => import('@components/organisms/Produce'))

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
}

const ContactLayout = ({ children }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <BannerContact />
      <Produce />
      <Footer />
    </Layout>
  )
}

export default ContactLayout
