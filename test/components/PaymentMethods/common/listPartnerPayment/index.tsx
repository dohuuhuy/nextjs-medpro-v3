// import Container from '@componentsTest/Container'
import { uniqueId } from 'lodash'
import React from 'react'
import { Icon } from '../../../Icon'
import styles from './styles.module.less'

import cx from 'classnames'

export const PartnerPayment = ({
  list,
  hospital,
  onSelectedPaymentFee,
  dispatch
}: any) => {
  const onSelectpayment = (item: any) => () => {
    dispatch(onSelectedPaymentFee(item))
  }

  return (
    <section className={styles.PartnerPayment}>
      {list.length > 3 && (
        <div className={styles.input}>
          <Icon name='timkiem' />
          <input placeholder='Tìm nhanh ngân hàng' />
        </div>
      )}
      <ul className={styles.listPartner}>
        {list.map((item: any) => {
          const active =
            hospital.selectedPaymentFee.name === item.name ? styles.active : ''
          return (
            <li key={uniqueId()}>
              <div className={styles.partner}>
                <figure
                  className={styles.icons}
                  onClick={onSelectpayment(item)}
                >
                  <img
                    className={cx(styles.imageIcon, active)}
                    src={
                      item.paymentIcon.path ||
                      require('./../images/payment.gif')
                    }
                    alt=''
                    width='auto'
                    height={40}
                  />
                </figure>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
