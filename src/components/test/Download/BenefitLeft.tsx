/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from './style.module.less'

interface BenefitLeft {
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
    <ul className={style.leftListBenefit}>
      {leftListBenefit.map(
        ({ id, title, description, imgBenefit }: BenefitLeftItem) => (
          <li key={id}>
            <figure className={style.img_small}>
              <img src={imgBenefit} alt='' />
            </figure>
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
