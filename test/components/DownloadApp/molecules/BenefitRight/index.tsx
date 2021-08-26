import React from 'react'
import styles from './styles.module.less'

export interface BenefitRight {
  rightListBenefit: BenefitRightItem[]
}
export interface BenefitRightItem {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: any
}
export const BenefitRight = ({ rightListBenefit }: BenefitRight) => {
  return (
    <ul className={styles.rightListBenefit}>
      {rightListBenefit.map(
        ({ title, description, imgBenefit }: BenefitRightItem) => (
          <li key={title}>
            <figure className={styles.img_small}>
              <img src={imgBenefit} alt='' />
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
