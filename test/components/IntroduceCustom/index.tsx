import React from 'react'
import { BannerIntro } from './organisms/BannerIntro'
import { CardIntro } from './organisms/CardIntro'
import { IntroducHospital } from './Introduce.interface'
import styles from './styles.module.less'
import { DataFailure, checkData } from '../DataFailure'
export interface IntroduceCustom {
  dataIntroduce: IntroducHospital
}

export const IntroduceCustom = ({ dataIntroduce }: IntroduceCustom) => {
  if (checkData(dataIntroduce)) {
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
