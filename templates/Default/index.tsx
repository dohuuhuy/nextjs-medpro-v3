import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { spring } from '@utils/contants'

const Header = dynamic(() => import('@components/organisms/Header'))
const BannerPage = dynamic(() => import('@components/organisms/Banner'))
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  appProps: any
}

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props
  const router = useRouter()

  const info = appProps?.introducHospital
  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <div className={styles.main}>
        <motion.div
          style={{ width: '100%' }}
          key={router.route}
          transition={spring}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -500, opacity: 0 }}
        >
          <BannerPage {...info} />
          <HandlerGetContentPage {...info} />

          {children}
        </motion.div>
      </div>
      <Footer {...info} />
    </Layout>
  )
}

export default DefaultLayout
