import { openInNewTab } from '@components/atoms/openInNewTab'
// import { Demo } from '@medpro/booking-libs'
import { Demo } from '@components/test/Demo'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/organisms/Header'))
const Download = dynamic(() => import('@components/organisms/DownloadApp'))
const BannerHome = dynamic(() => import('@components/organisms/BannerHomeApp'))
const SliderHospital = dynamic(
  () => import('@components/organisms/SilderHospital')
)
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Introduce = dynamic(() => import('@components/organisms/IntroduceApp'))
const Footer = dynamic(() => import('@components/organisms/Footer'))
// const FooterCustom = dynamic(() => import('@components/test/FooterCustom'))

type Props = {
  children?: ReactNode
}
const HomeLayout = ({ children }: Props) => {
  const handerFuncTest = (name: string) => {
    alert(name)
  }

  return (
    <Layout className={styles.layout}>
      {/* <Header /> */}
      <BannerHome />
      <SliderHospital />
      <Introduce />

      {/* <Demo
        text={'viết bằng typescript function và có sử dụng module.less'}
        funcTest={() => handerFuncTest('huyi')}
        funcLogin={() =>
          openInNewTab('https://id-v121.medpro.com.vn/check-phone')
        }
      /> */}
      <Download />
      <SupportMethod />
      {children}
      <Footer />
    </Layout>
  )
}

export default HomeLayout
