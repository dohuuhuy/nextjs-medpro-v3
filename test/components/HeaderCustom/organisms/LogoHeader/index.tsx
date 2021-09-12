import styles from './styles.module.less'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface ImgLogoHeader {
  logoHeader: string
  logoHeaderMobile: string
}

export const LogoHeader = ({ logoHeader }: ImgLogoHeader) => {
  return (
    <figure className={styles.figureLogoHeader}>
      <Link href='/'>
        <a>
          <Image
            src={logoHeader}
            alt=''
            className={styles.logoHeader}
            width='275'
            height='110'
          />
        </a>
      </Link>
    </figure>
  )
}
