import { AnimatePage } from '@components/atoms/motion'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: any
}

const HomeLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.info

  return (
    <Layout className={styles.layout}>
      <Header {...info} />
      <AnimatePage>{children}</AnimatePage>
      <Footer {...info} />
    </Layout>
  )
}
export default HomeLayout
