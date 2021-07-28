import React from 'react'
import { BannerIntro } from './BannerIntro'
import { CardIntro } from './CardIntro'
import { IntroducHospital } from './Introduce.interface'
import styles from './style.module.less'
interface IntroduceCustom {
  dataIntroduce: IntroducHospital
}

export const IntroduceCustom = ({ dataIntroduce }: IntroduceCustom) => {
  const { checkDataInput, DataFailure } = require('./../DataFailure')
  if (checkDataInput(dataIntroduce)) {
    return <DataFailure description={'Lỗi không có data giới thiệu'} />
  }

  const { contentIntro, cardIntro } = dataIntroduce

  return (
    <div className={styles.solutionBox}>
      <BannerIntro dataContentIntro={contentIntro} />
      <CardIntro dataCardIntro={cardIntro} />
    </div>
  )
}
