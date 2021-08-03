import style from './styles.module.less'
import React from 'react'
interface SupportHeader {
  support?: any
}

export const SupportHeader = ({ support }: SupportHeader) => {
  const imageErrorSrc = '/images/error.svg'
  const urlImage = support.icon || imageErrorSrc
  const onError = (e: any) => {
    e.target.src = imageErrorSrc
  }
  return (
    <div className={style.SupportHeader}>
      <figure className={style.imgSupport}>
        <img src={urlImage} alt='icon' onError={onError} />
      </figure>

      <div className={style.descSupport}>
        <p> {support.textSuport} </p>
        <a href={'tel:' + support.phone} className={style.phoneSupport}>
          {support.phone}
        </a>
      </div>
    </div>
  )
}
