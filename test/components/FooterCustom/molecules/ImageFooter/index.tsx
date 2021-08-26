import React from 'react'
import styles from './styles.module.less'

interface Props {
  logoChecked?: ItemChecked[]
}

export interface ItemChecked {
  id?: string
  imgLogo: string
  link: string
}

export const ImageFooter = ({ logoChecked }: Props) => {
  return (
    <ul className={styles.listLogoChecked}>
      {logoChecked?.map(({ link, imgLogo }: any, i: number) => (
        <li key={i}>
          <a href={link}>
            <img src={imgLogo} className={styles.img} alt='icon' />
          </a>
        </li>
      ))}
    </ul>
  )
}
