import { Icon } from '@componentsTest/Icon'
import React, { useEffect, useState } from 'react'
import styles from './../less/bacsi.module.less'
import { Props } from './interface'
import { checkActive, clickItem } from './utils'

export const BacSi = (props: Props) => {
  const [list, setlist] = useState(props.data)
  const [keySearch, setkeySearch] = useState('')

  useEffect(() => {
    setlist(props.data)
  }, [props.data])

  const onSearchKey = (e: any) => {
    const { value } = e.target
    setkeySearch(value)
    const findItem = props?.data.filter(
      (v) => v.detail.name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlist(findItem)
  }

  return (
    <section className={styles.bacSi}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input
          placeholder='Tìm nhanh bác sĩ'
          onChange={onSearchKey}
          value={keySearch}
        />
      </div>

      <ul className={styles.listBacSi}>
        {list.map((v) => {
          const size = '100'
          const sex = v.detail.gender ? 'Nam' : 'Nữ'
          const img = v.detail.gender ? (
            <Icon name='bacsinam' size={size} />
          ) : (
            <Icon name='bacsinu' size={size} />
          )
          const active = checkActive(v, props) ? styles.active : ''
          return (
            <li key={v.id} className={active}>
              <div className={styles.card}>
                <figure>{img}</figure>
                <div
                  className={styles.bodyCard}
                  onClick={() => clickItem({ item: v, props })}
                >
                  <p>{v.hocvi}</p>
                  <p className='bold'>{v.detail.name}</p>
                  <p className={styles.txtCK}>{v.detail.subject}</p>
                  <p>Giới tính: {sex}</p>
                </div>
                <Icon name='love' fill={'#CBD2D9'} size='30' />
              </div>
              <div className={styles.datkham}>
                <p>
                  <span className={styles.txtTime}>Giờ khám gần nhất:</span>
                  <br />
                  <span>{v.giocan}</span>
                </p>
                <button
                  className={styles.btn}
                  onClick={() => clickItem({ item: v, props })}
                >
                  Đặt khám
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
