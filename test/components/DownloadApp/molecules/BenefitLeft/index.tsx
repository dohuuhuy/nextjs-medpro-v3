import Image from 'next/image'
import React from 'react'
import styles from './styles.module.less'

export interface BenefitLeft {
  leftListBenefit: BenefitLeftItem[]
}
interface BenefitLeftItem {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: string
}
export const BenefitLeft = ({ leftListBenefit }: BenefitLeft) => {
  return (
    <ul className={styles.leftListBenefit}>
      {leftListBenefit.map(
        ({ title, description, imgBenefit }: BenefitLeftItem) => (
          <li key={title}>
            <figure className={styles.img_small}>
              <Image src={imgBenefit} alt='imgBenefit' width={80} height={80} />
            </figure>
            <div className={styles.list_content}>
              <h4 className={styles.list_title}>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </li>
        )
      )}
    </ul>
  )
}
