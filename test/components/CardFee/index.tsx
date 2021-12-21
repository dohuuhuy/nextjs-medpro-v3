import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { TITLE, urlGo, VALUE } from './common/contants'
import { getSetting, handleList } from './common/utils'
import { useDispatch } from 'react-redux'

export interface CardFeeIF {
  hospital: {
    paymentFee: any
    selectedPaymentFee: any
    passSchedules?: any
    isRepayment?: boolean
  }
  onReserveBooking?: any
  willPayment?: boolean
  selectedPatient?: any
  onRePayment?: any
}

export const CardFee = (props: CardFeeIF) => {
  const dispatch = useDispatch()
  const { passSchedules } = props.hospital

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

    if (props.willPayment) {
      if (props.hospital.isRepayment) {
        dispatch(props.onRePayment())
      } else {
        dispatch(props.onReserveBooking())
      }
    } else {
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
        {handleList(props.hospital, props.selectedPatient).map((item, i) => {
          const t = getSetting(item, TITLE)
          const v = getSetting(item, VALUE)
          return (
            item.visable && (
              <li key={i}>
                <span
                  className={cx(styles.title, t.bold, t.under)}
                  style={{ color: t.color, fontSize: t.fontSize }}
                >
                  {item.title}{' '}
                </span>
                <span
                  className={cx(styles.value, t.bold, t.under)}
                  style={{ color: v.color, fontSize: v.fontSize }}
                >
                  {item?.value}
                </span>
              </li>
            )
          )
        })}
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
