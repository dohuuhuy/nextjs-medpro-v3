/* eslint-disable @next/next/no-img-element */

import style from './styles.module.less'
import React from 'react'
interface SupportHeader {
  support?: any
}

export const SupportHeader = ({ support }: SupportHeader) => {
  return (
    <div className={style.SupportHeader}>
      <div className={style.imgSupport}>
        <img src={support.icon} alt='Logo support' />
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
