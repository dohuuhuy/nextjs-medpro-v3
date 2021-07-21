import React from 'react'
import Styles from './style.module.less'
import { IntroducHospital } from './Introduce.interface'
import { BannerIntro } from './BannerIntro'
import { CardIntro } from './CardIntro'
import { FooterSign } from './FooterSign'
interface IntroduceCustom {
  dataIntroduce: IntroducHospital
}

export const IntroduceCustom = ({ dataIntroduce }: IntroduceCustom) => {
  if (!dataIntroduce) return <em>Lỗi data input</em>
  return (
    <div className={Styles.solutionBox}>
      <BannerIntro dataContentIntro={dataIntroduce.contentIntro} />
      <CardIntro dataCardIntro={dataIntroduce.cardIntro} />
      <FooterSign />
    </div>
  )
}
