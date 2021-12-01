import FooterPublic from '@components/organisms/FooterPublic'
import HeaderPublic from '@components/organisms/HeaderPublic'
import React from 'react'
import styles from './styles.module.less'

const DefaultLayout = ({ children }: any) => {
  return (
    <section className={styles.layout}>
      <HeaderPublic />
      <main className={styles.content}>{children}</main>
      <FooterPublic />
    </section>
  )
}

export default DefaultLayout
