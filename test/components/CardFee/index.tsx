import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { urlGo } from './common/utils/contants'

export interface CardFeeIF {
  hospital: {
    paymentFee: any
    selectedPaymentFee: any
    passSchedules?: any
  }
}

export const CardFee = (props: CardFeeIF) => {
  const { paymentFee, selectedPaymentFee, passSchedules } = props.hospital

  const router = useRouter()
  const [isVisible, setIsVisible] = React.useState(false)
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
      query: { site },
      pathname
    } = router

    if (site) {
      const name = pathname.replace('/[site]/', '')

      let willGo = ''
      switch (name) {
        case urlGo.DAT_LICH_KHAM:
          willGo = urlGo.XAC_NHAN_THONG_TIN
          break

        case urlGo.XAC_NHAN_THONG_TIN:
          willGo = urlGo.PHUONG_THUC_THANH_TOAN
          break

        default:
          break
      }

      router.push(`/${site}/${willGo}`)
    }
  }
  const routerBack = () => {
    router.back()
  }

  return (
    <div className={cx(styles.cardFee, isVisible ? styles.scroll : null)}>
      <p className={styles.luuy}>
        <Icon name='luuy' /> Vui lòng kiểm tra lại thông tin trước khi đặt lịch
      </p>
      <ul className={styles.listFee}>
        <li>
          <span className={styles.label}>Phương thức thanh toán</span>
          <span className={styles.value}>{selectedPaymentFee?.name}</span>
        </li>
        <li>
          <span className={styles.label}>Phí khám bệnh</span>
          <span className={styles.value}>{paymentFee?.subTotal || 0} VND</span>
        </li>
        <li>
          <span className={styles.label}>Phí tiện ích</span>
          <span className={styles.value}>{paymentFee?.totalFee || 0} VND</span>
        </li>
        <li>
          <span className={styles.label}>Tổng tiền</span>
          <span className={styles.value}>
            {paymentFee?.grandTotal || 0} VND
          </span>
        </li>
      </ul>
      <div className={styles.groupBtn}>
        <button className={cx(styles.btn, styles.again)} onClick={routerBack}>
          Trở về
        </button>
        <button
          className={cx(
            styles.btn,
            styles.next,
            passSchedules ? styles.active : ''
          )}
          onClick={routePush}
          disabled={!passSchedules}
        >
          {passSchedules ? 'Tiếp tục' : 'Chưa thể tiếp tục'}
        </button>
      </div>
    </div>
  )
}
