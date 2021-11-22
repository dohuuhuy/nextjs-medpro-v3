import Banners from '@components/organisms/Banner'
import FooterPublic from '@components/organisms/Footer'
import HeaderPublic from '@components/organisms/Header'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: any
}

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.info
  return (
    <section className={styles.layout}>
      <HeaderPublic />
      <main className={styles.content}>
        <Banners {...info} />
        {children}
      </main>
      <FooterPublic />
    </section>
  )
}

export default DefaultLayout
