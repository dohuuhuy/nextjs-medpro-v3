import React from 'react'
import Image from 'next/image'
import styles from './styles.module.less'
import { PropsHeader } from '../../interface.header'

export const NavBottom = ({ dataHeader, Authencation }: PropsHeader) => {
  // console.log("data ", dataHeader, Authencation)
  const { menuMobile } = dataHeader
  return (
    <ul className={styles.nav_bottom}>
      {menuMobile.map((item, i: number) => (
        <li key={i} className={styles.colBtn}>
          <a className={styles.btn}>
            <Image src={item?.icon} alt='icon' height='25' width='25' />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
