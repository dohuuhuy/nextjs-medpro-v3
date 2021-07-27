import React from 'react'
import { BannerIntro } from './BannerIntro'
import { CardIntro } from './CardIntro'
import { IntroducHospital } from './Introduce.interface'
import styles from './style.module.less'
interface IntroduceCustom {
  dataIntroduce: IntroducHospital
}

export const IntroduceCustom = ({ dataIntroduce }: IntroduceCustom) => {
  if (!dataIntroduce) return <em>Lỗi data input</em>

  const { contentIntro, cardIntro } = dataIntroduce

  return (
    <div className={styles.solutionBox}>
      <BannerIntro dataContentIntro={contentIntro} />
      <CardIntro dataCardIntro={cardIntro} />
    </div>
  )
}
