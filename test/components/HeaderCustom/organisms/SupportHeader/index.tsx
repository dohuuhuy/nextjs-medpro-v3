/* eslint-disable @next/next/no-img-element */

import style from './styles.module.less'
import React from 'react'
interface SupportHeader {
  support?: any
}

export const SupportHeader = ({ support }: SupportHeader) => {
  const imageErrorSrc = '/images/error.svg'
  const urlImage = support.icon || imageErrorSrc

  return (
    <div className={style.SupportHeader}>
      <div className={style.imgSupport}>
        <img
          src={urlImage}
          alt='icon'
          onError={(e) => {
            e.target.src = imageErrorSrc
          }}
        />
      </div>

      <div className={style.descSupport}>
        <p> {support.textSuport} </p>
        <a href={'tel:' + support.phone} className={style.phoneSupport}>
          {support.phone}
        </a>
      </div>
    </div>
  )
}
