import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Introduce = dynamic(() => import('@components/organisms/IntroduceApp'))
const Download = dynamic(() => import('@components/organisms/DownloadApp'))
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Footer = dynamic(() => import('@components/organisms/Footer'))

type Props = {
  children?: ReactNode
}

const HomeLayout = ({}: Props) => {
  return (
    <Layout className={styles.layout}>
      <Introduce />
      <Download />
      <SupportMethod />
      <Footer />
    </Layout>
  )
}

export default HomeLayout
