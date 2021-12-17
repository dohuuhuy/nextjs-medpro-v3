import { Icon } from '@componentsTest/Icon'
import cx from 'classnames'
import React, { useState } from 'react'
import styles from './../less/chuyenkhoa.module.less'
import { Props } from './interface'
import { checkActive, clickItem, onSearchKey } from './utils'

export const ChuyenKhoa = (props: Props) => {
  // console.log('props ChuyenKhoa :>> ', props)

  const [list, setlist] = useState(props.data)
  const [keySearch, setkeySearch] = useState('')

  return (
    <section className={styles.chuyenkhoa}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input
          placeholder='Tìm nhanh chuyên khoa'
          onChange={(e) => onSearchKey(e, props.data, setkeySearch, setlist)}
          value={keySearch}
        />
      </div>

      <ul className={styles.listChuyenKhoa}>
        {list.map((item) => {
          const active = checkActive(item, props) ? styles.active : ''
          return (
            <li key={item.id} onClick={() => clickItem({ item, props })}>
              <div className={cx(styles.card, active)}>
                <figure>
                  <Icon name='demo' />
                </figure>
                <span>{item.detail.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
