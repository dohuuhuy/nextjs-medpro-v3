import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'

export const CardFee = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  React.useEffect(() => {
    const toggleVisibility = () => {
      console.log('window.pageYOffset :>> ', window.pageYOffset)
      if (window.pageYOffset > 150) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={cx(styles.cardFee, isVisible ? styles.scroll : null)}>
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
