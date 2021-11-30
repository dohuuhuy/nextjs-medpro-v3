/* eslint-disable @next/next/no-img-element */
import { Icon } from '@componentsTest/Icon'
import { Rate, Result } from 'antd'
import { uniqueId } from 'lodash'
import React from 'react'
import styles from './../styles.module.less'
import { redirect } from './func'
import { ListHospital } from './interface'

export const cardHospital = (arr: ListHospital[], router: any) => {
  if (arr.length < 1)
    return (
      <Result
        status='404'
        title='404'
        subTitle='Xin lỗi, chúng tôi không tìm thấy bệnh viện bạn cần tìm !'
      />
    )
  return arr?.map((e) => {
    const isRate = e.deliveryMessage ? (
      <p className={styles.status}>
        <i>{e.deliveryMessage}</i>
      </p>
    ) : null

    const imgError = require('./images/logo.svg')
    const size = 50
    const propsImage = {
      src: e?.image || imgError,
      width: size,
      height: size,
      onError: (e: any) => (e.target.src = imgError)
    }

    return (
      <li key={uniqueId()} onClick={redirect(e, router)}>
        <div className={styles.cardHospital}>
          <figure className={styles.cardView}>
            <img alt='' {...propsImage} />
          </figure>
          <div className={styles.cardBody}>
            <p className={styles.nameHospital}>{e?.name}</p>
            <p className={styles.address}>{e?.address}</p>
            {isRate}
          </div>
          <div className={styles.favorite}>
            <Icon name='yeuthich' fill='#CBD2D9' size='15' />
          </div>
        </div>
      </li>
    )
  })
}
