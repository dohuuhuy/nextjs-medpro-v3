import React from 'react'

import styles from './styles.module.less'

export const CardInfo = ({ info }: any) => {
  return (
    <div className={styles.cardInfo}>
      <figure className={styles.cardView}>
        <img src={info?.image} alt='logo' />
      </figure>
      <div className={styles.cardBody}>
        <h2>{info?.name}</h2>
        <p className={styles.address}>
          <em>{info?.address}</em>
        </p>
      </div>
    </div>
  )
}
