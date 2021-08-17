import styles from './styles.module.less'
import React from 'react'
import Link from 'next/link'

export interface ImgLogoHeader {
  logoHeader: string | undefined
  logoHeaderMobile: string | undefined
}

export const LogoHeader = ({ logoHeader, logoHeaderMobile }: ImgLogoHeader) => {
  return (
    <figure className={styles.figureLogoHeader}>
      <Link href='/'>
        <a>
          <img src={logoHeader} alt='' className={styles.logoHeader} />
          <img
            src={logoHeaderMobile}
            alt=''
            className={styles.logoHeaderMobile}
          />
        </a>
      </Link>
    </figure>
  )
}
