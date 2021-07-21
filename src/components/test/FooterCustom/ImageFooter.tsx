/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ItemChecked } from './footer.interface'
import style from './styles.module.less'

interface Props {
  logoChecked?: Array<ItemChecked>
}

export const ImageFooter = ({ logoChecked }: Props) => {
  return (
    <ul className={style.listLogoChecked}>
      {logoChecked?.map(({ link, imgLogo }: any, i: number) => (
        <li key={i}>
          <a href={link}>
            <img src={imgLogo} className={style.img} alt='imgLogo' />
          </a>
        </li>
      ))}
    </ul>
  )
}
