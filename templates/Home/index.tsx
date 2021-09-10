import { Information } from 'store/interface'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { spring } from '@utils/contants'
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
  const router = useRouter()
  const { children, appProps } = props

  const info = appProps?.introducHospital

  return (
    <Layout className={styles.layout}>
      <Header {...info} />

      <motion.div
        style={{ width: '100%' }}
        key={router.asPath}
        transition={spring}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -500, opacity: 0 }}
      >
        <BannerPage {...info} />
        <SliderHospital {...info} />
        <Introduce {...info} />
        <Download {...info} />
        {children}
        <SupportMethod {...info} />
      </motion.div>
      <Footer {...info} />
    </Layout>
  )
}
export default HomeLayout
