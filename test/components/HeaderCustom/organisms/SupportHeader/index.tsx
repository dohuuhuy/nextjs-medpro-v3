import Image from 'next/image'
import React from 'react'
import styles from './styles.module.less'

export interface SupportHeader {
  support?: any
}

export const SupportHeader = ({ support }: SupportHeader) => {
  const imageErrorSrc = '/images/error.svg'
  const urlImage = support.icon || imageErrorSrc
  const onError = (e: any) => {
    e.target.src = imageErrorSrc
  }
  return (
    <div className={styles.SupportHeader}>
      <figure className={styles.imgSupport}>
        <Image
          src={urlImage}
          alt='icon'
          onError={onError}
          width={40}
          height={40}
        />
      </figure>

      <div className={styles.c}>
        <p> {support?.textSuport} </p>
        <a href={'tel:' + support.phone} className={styles.phoneSupport}>
          {support.phone}
        </a>
      </div>
    </div>
  )
}
