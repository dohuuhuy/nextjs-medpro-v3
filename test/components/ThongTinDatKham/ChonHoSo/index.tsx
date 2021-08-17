import React from 'react'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'

export const ChonHoSo = (Props: Medthods) => {
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {Props?.listPatient?.map((item: any, index: any) => {
          const { fullname } = item
          return (
            <li key={index} className={styles.card}>
              <div className={styles.cardBody}>{fullname}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
