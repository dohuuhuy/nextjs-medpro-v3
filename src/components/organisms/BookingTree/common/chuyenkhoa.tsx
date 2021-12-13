import { Icon } from '@componentsTest/Icon'
import cx from 'classnames'
import React, { useState } from 'react'
import styles from './../less/chuyenkhoa.module.less'
import { Props } from './interface'
import { checkActive, clickItem } from './utils'

export const ChuyenKhoa = (props: Props) => {
  console.log('props ChuyenKhoa :>> ', props)

  const [list, setlist] = useState(props.data)
  const [keySearch, setkeySearch] = useState('')

  const onSearchKey = (e: any) => {
    const { value } = e.target
    setkeySearch(value)
    const findItem = props?.data.filter(
      (v) => v.detail.name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlist(findItem)
  }

  return (
    <section className={styles.chuyenkhoa}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input
          placeholder='Tìm nhanh chuyên khoa'
          onChange={onSearchKey}
          value={keySearch}
        />
      </div>

      <ul className={styles.listChuyenKhoa}>
        {list.map((v) => {
          const active = checkActive(v, props) ? styles.active : ''
          return (
            <li key={v.id} onClick={() => clickItem({ item: v, props })}>
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
