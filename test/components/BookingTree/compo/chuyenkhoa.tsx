import React from 'react'
import { Icon } from '../../Icon'
import { checkActive, selected } from '../utils'
import styles from './../less/chuyenkhoa.module.less'
import cx from 'classnames'

export const ChuyenKhoa = (props: any) => {
  console.log('props ChuyenKhoa :>> ', props)

  return (
    <section className={styles.chuyenkhoa}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input placeholder='Tìm nhanh chuyên khoa' />
      </div>

      <ul className={styles.listChuyenKhoa}>
        {props.data.map((v: any) => {
          const active = checkActive(v, props) ? styles.active : ''
          return (
            <li key={v.id} onClick={selected(v, props)}>
              <div className={cx(styles.card, active)}>
                <figure>
                  <Icon name='demo' />
                </figure>
                <span>{v.detail.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
