import { Icon } from '../Icon'
import styles from './styles.module.less'
import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { TITLE, urlGo, VALUE } from './common/contants'
import { getSetting, handleList } from './common/utils'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'antd'

export interface CardFeeIF {
  hospital: {
    paymentFee: any
    selectedPaymentFee: any
    passSchedules?: any
    isRepayment?: boolean
    schedule: any
  }
  onReserveBooking?: any
  willPayment?: boolean
  selectedPatient?: any
  onRePayment?: any
}

export const CardFee = (props: CardFeeIF) => {
  const dispatch = useDispatch()

  const router = useRouter()

  const {
    query: { site }
  } = router

  const { passSchedules } = props.hospital

  const [isVisible, setIsVisible] = React.useState(false)

  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  // const [modalText, setModalText] = React.useState('Content of the modal')

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

  const willGo = () => {
    const name = router.pathname.replace('/[site]/', '')

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

    return willGo
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
      router.push(`/${site}/${willGo()}`)
    }, 2000)
  }

  const routePush = () => {
    if (props.willPayment) {
      if (props.hospital.isRepayment) {
        dispatch(props.onRePayment())
      } else {
        dispatch(props.onReserveBooking())
      }
    } else {
      if (site) {
        const {
          schedule: {
            service: {
              selected: { requiredCheckInsurance, serviceType }
            }
          }
        } = props.hospital

        if (
          requiredCheckInsurance &&
          serviceType === 'INSURANCE_ONLY' &&
          router.asPath.includes(urlGo.DAT_LICH_KHAM)
        ) {
          showModal()
        } else {
          router.push(`/${site}/${willGo()}`)
        }
      }
    }
  }
  const routerBack = () => {
    router.back()
  }

  const modalConfirmBHYT = () => {
    const popupContent =
      props?.hospital?.schedule?.service?.selected?.popupContent

    return (
      <Modal
        closable={false}
        visible={visible}
        confirmLoading={confirmLoading}
        footer={[
          <Button key={1} loading={confirmLoading} onClick={handleOk}>
            Tôi đồng ý
          </Button>
        ]}
      >
        <p>{popupContent}</p>
      </Modal>
    )
  }

  return (
    <div className={cx(styles.cardFee, isVisible ? styles.scroll : null)}>
      {modalConfirmBHYT()}
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
