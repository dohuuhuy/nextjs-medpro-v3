import React from 'react'
import style from './style.module.less'

interface BenefitRight {
  rightListBenefit: BenefitRightItem[]
}
interface BenefitRightItem {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: any
}
export const BenefitRight = ({ rightListBenefit }: BenefitRight) => {
  return (
    <ul className={style.rightListBenefit}>
      {rightListBenefit.map(
        ({ title, description, imgBenefit }: BenefitRightItem) => (
          <li key={title}>
            <figure className={style.img_small}>
              <img src={imgBenefit} alt='' />
            </figure>
            <div className={style.list_content}>
              <h4 className={style.list_title}>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </li>
        )
      )}
    </ul>
  )
}
