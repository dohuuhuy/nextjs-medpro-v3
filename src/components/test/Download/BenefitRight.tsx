/* eslint-disable @next/next/no-img-element */
import cx from 'classnames'
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
        ({ id, title, description, imgBenefit }: BenefitRightItem) => (
          <li key={id}>
            <div className={style.img_small}>
              <img src={imgBenefit} alt='' />
            </div>
            <div className={style.list_content}>
              <p className={style.list_title}>{title}</p>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </li>
        )
      )}
    </ul>
  )
}
