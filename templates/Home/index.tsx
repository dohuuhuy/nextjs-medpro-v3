import { AnimatePage } from '@components/atoms/motion'
import Footer from '@components/organisms/Footer'
import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import { Information } from 'store/interface'
// import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: Information
}

const HomeLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.introducHospital

  return (
    <Layout>
      {/* <Header {...info} /> */}
      <AnimatePage>{children}</AnimatePage>
      <Footer {...info} />
    </Layout>
  )
}
export default HomeLayout
