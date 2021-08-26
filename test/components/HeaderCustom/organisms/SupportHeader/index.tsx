import styles from './styles.module.less'
import React from 'react'
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
        <img src={urlImage} alt='icon' onError={onError} />
      </figure>

      <div className={styles.descSupport}>
        <p> {support.textSuport} </p>
        <a href={'tel:' + support.phone} className={styles.phoneSupport}>
          {support.phone}
        </a>
      </div>
    </div>
  )
}
