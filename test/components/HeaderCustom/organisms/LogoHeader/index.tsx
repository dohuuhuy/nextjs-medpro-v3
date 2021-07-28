import style from './styles.module.less'
import React from 'react'

export interface ImgLogoHeader {
  logoHeader: string | undefined
  logoHeaderMobile: string | undefined
}

export const LogoHeader = ({ logoHeader, logoHeaderMobile }: ImgLogoHeader) => {
  return (
    <figure className={style.figureLogoHeader}>
      <img src={logoHeader} alt='' className={style.logoHeader} />
      <img src={logoHeaderMobile} alt='' className={style.logoHeaderMobile} />
    </figure>
  )
}
