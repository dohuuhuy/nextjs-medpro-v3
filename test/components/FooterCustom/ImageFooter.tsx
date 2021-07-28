import React from 'react'
import { ItemChecked } from './interface.footer'
import style from './styles.module.less'

interface Props {
  logoChecked?: ItemChecked[]
}

export const ImageFooter = ({ logoChecked }: Props) => {
  return (
    <ul className={style.listLogoChecked}>
      {logoChecked?.map(({ link, imgLogo }: any, i: number) => (
        <li key={i}>
          <a href={link}>
            <img src={imgLogo} className={style.img} alt='icon' />
          </a>
        </li>
      ))}
    </ul>
  )
}
