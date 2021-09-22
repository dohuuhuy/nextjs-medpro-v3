import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'

export const CardFee = () => {
  return (
    <div className={styles.cardFee}>
      <p className={styles.luuy}>
        <Icon name='luuy' /> Vui lòng kiểm tra lại thông tin trước khi đặt lịch
      </p>
      <ul className={styles.listFee}>
        <li>
          <span className={styles.label}>Phí khám bệnh</span>
          <span className={styles.value}>0 VND</span>
        </li>
        <li>
          <span className={styles.label}>Phí tiện ích</span>
          <span className={styles.value}>0 VND</span>
        </li>
        <li>
          <span className={styles.label}>Tổng tiền</span>
          <span className={styles.value}>0 VND</span>
        </li>
      </ul>
      <div className={styles.groupBtn}>
        <button className={cx(styles.btn, styles.again)}>Trở về</button>
        <button className={cx(styles.btn, styles.next)}>Tiếp tục</button>
      </div>
    </div>
  )
}
