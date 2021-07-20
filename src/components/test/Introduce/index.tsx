import React from 'react'
import Styles from './style.module.less'
import { IntroducHospital } from './Introduce.interface'
import { BannerIntro } from './BannerIntro'
import { CardIntro } from './CardIntro'
import Container from '../Container'
interface IntroduceCustom {
  dataIntroduce: IntroducHospital
}

export const IntroduceCustom = ({ dataIntroduce }: IntroduceCustom) => {
  if (!dataIntroduce) return <em>Lỗi data input</em>
  return (
    <Container className={Styles.solutionBox}>
      <BannerIntro dataContentIntro={dataIntroduce.contentIntro} />
      <CardIntro dataCardIntro={dataIntroduce.cardIntro} />
    </Container>
  )
}
