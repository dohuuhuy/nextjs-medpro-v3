import { Icon } from '@componentsTest/Icon'
import { uniqueId } from 'lodash'
import React from 'react'
import styles from './styles.module.less'
import { Special, dataSpecial } from './utils/data'

export const SpecialContent = () => {
  return (
    <ul className={styles.listCard}>
      {dataSpecial.map((item: Special) => {
        return (
          <li key={uniqueId()}>
            <div className={styles.cardContent}>
              <Icon name={item.icon} size="35" />
              <p>{item.name}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
