import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'

export const CardFee = () => {
  const router = useRouter()
  const [_isVisible, setIsVisible] = React.useState(false)
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 150) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const routePush = () => {
    const {
      query: { site }
    } = router
    router.push(`/${site}/xac-nhan-thong-tin`)
  }
  const routerBack = () => {
    router.back()
  }

  return (
    <div className={cx(styles.cardFee)}>
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
        <button className={cx(styles.btn, styles.again)} onClick={routerBack}>
          Trở về
        </button>
        <button className={cx(styles.btn, styles.next)} onClick={routePush}>
          Tiếp tục
        </button>
      </div>
    </div>
  )
}
