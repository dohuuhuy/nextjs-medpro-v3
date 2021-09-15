import { AnimatePage } from '@components/atoms/motion'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import { Information } from 'store/interface'
import styles from './styles.module.less'
const Header = dynamic(() => import('@components/organisms/Header'))

const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
  appProps: Information
}

const HomeLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.introducHospital

  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <AnimatePage>{children}</AnimatePage>
      <Footer {...info} />
    </Layout>
  )
}
export default HomeLayout
