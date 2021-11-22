import FooterPublic from '@components/organisms/Footer'
import HeaderPublic from '@components/organisms/Header'
import React from 'react'
import styles from './styles.module.less'

const HomeLayout = ({ children }: any) => {
  return (
    <section className={styles.layout}>
      <HeaderPublic />
      <main className={styles.content}>{children}</main>
      <FooterPublic />
    </section>
  )
}
export default HomeLayout
