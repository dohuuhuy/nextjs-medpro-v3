import { Icon } from '@componentsTest/Icon'
import { uniqueId } from 'lodash'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'
import { Special, dataSpecial } from './utils/data'

export const SpecialContent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {dataSpecial.map((item: Special) => {
          return (
            <li key={uniqueId()}>
              <div className={styles.cardContent}>
                <Image src={item.image} height={25} width={25} />
                <p>{item.name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
