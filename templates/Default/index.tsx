import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

type Props = {
  children?: ReactNode
  appProps: any
}

const BannerPage = dynamic(() => import('@components/organisms/Banner'))

const DefaultLayout = (props: Props) => {
  const { children, appProps } = props

  const info = appProps?.info
  return (
    <section className={styles.layout}>
      <Header {...info} />
      <main className={styles.main}>
        <BannerPage {...info} />
        <HandlerGetContentPage {...info} />

        {children}
      </main>
      <Footer {...info} />
    </section>
  )
}

export default DefaultLayout
