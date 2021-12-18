// import Container from '@componentsTest/Container'
import { uniqueId } from 'lodash'
import React from 'react'
import { Icon } from '../../../Icon'
import styles from './styles.module.less'

import cx from 'classnames'
import { useDispatch } from 'react-redux'

export const CardPaymentFee = ({
  list,
  hospital,
  onSelectedPaymentFee
}: any) => {
  const dispatch = useDispatch()

  const onSelectpayment = (item: any) => () => {
    dispatch(onSelectedPaymentFee(item))
  }

  return (
    <div className={styles.CardPaymentFee}>
      {list.length > 3 && (
        <div className={styles.input}>
          <Icon name='timkiem' />
          <input placeholder='Tìm nhanh ngân hàng' />
        </div>
      )}
      <ul className={styles.listMethods}>
        {list.map((item: any) => {
          const active =
            hospital.selectedPaymentFee.name === item.name ? styles.active : ''
          const urlImg =
            item.paymentIcon.path || require('./../images/payment.gif')
          return (
            <li key={uniqueId()}>
              <div className={styles.card}>
                <figure
                  className={styles.icons}
                  onClick={onSelectpayment(item)}
                >
                  <img
                    className={cx(styles.imageIcon, active)}
                    src={urlImg}
                    width='auto'
                    height={40}
                    alt=''
                  />
                </figure>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
