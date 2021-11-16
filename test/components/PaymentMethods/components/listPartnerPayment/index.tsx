// import Container from '@componentsTest/Container'
import { Icon } from '@componentsTest/Icon'
import React from 'react'
import styles from './styles.module.less'
import { uniqueId } from 'lodash'
import { dataPartner } from '@componentsTest/PaymentMethods/utils/data'

export const PartnerPayment = () => {
  return (
    <section className={styles.PartnerPayment}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input placeholder='Tìm nhanh ngân hàng' />
      </div>
      <ul className={styles.listPartner}>
        {dataPartner.map(({ img }: any) => {
          return (
            <li key={uniqueId()}>
              <div className={styles.partner}>
                <figure className={styles.icons}>
                  {img}
                </figure>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
