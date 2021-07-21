/* eslint-disable @next/next/no-img-element */
import style from './styles.module.less'

export interface ImgLogoHeader {
  logoHeader: string | undefined
  logoHeaderMobile: string | undefined
}

export const LogoHeader: React.FC<ImgLogoHeader> = ({
  logoHeader,
  logoHeaderMobile
}) => {
  return (
    <figure className={style.figureLogoHeader}>
      <img src={logoHeader} alt='' className={style.logoHeader} />
      <img src={logoHeaderMobile} alt='' className={style.logoHeaderMobile} />
    </figure>
  )
}
