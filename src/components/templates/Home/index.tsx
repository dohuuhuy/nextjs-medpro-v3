import FooterPublic from '@components/organisms/FooterPublic'
/* import HeaderPublic from '@components/organisms/HeaderPublic' */
import {BannerHomeMobile} from '@componentsTest/BannerHomeMobile'
import React from 'react'
import styles from './styles.module.less'

const HomeLayout = ({ children }: any) => {
  return (
    <section className={styles.layout}>
      <BannerHomeMobile />
      <main className={styles.content}>{children}</main>
      <FooterPublic />
    </section>
  )
}
export default HomeLayout
