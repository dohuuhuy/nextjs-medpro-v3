import { Icon } from '@componentsTest/Icon'
import React, { useState } from 'react'
import styles from './../less/bacsi.module.less'
import { Props } from './interface'
import { checkActive, clickItem, onSearchKey } from './utils'

export const BacSi = (props: Props) => {
  const [list, setlist] = useState(props.data)
  const [keySearch, setkeySearch] = useState('')

  React.useEffect(() => {
    setlist(props.data)
  }, [props.data])

  return (
    <section className={styles.bacSi}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input
          placeholder='Tìm nhanh bác sĩ'
          onChange={(e) => onSearchKey(e, props.data, setkeySearch, setlist)}
          value={keySearch}
        />
      </div>

      <ul className={styles.listBacSi}>
        {list.map((item) => {
          const size = '100'
          const sex = item.detail.gender ? 'Nam' : 'Nữ'
          const img = item.detail.gender ? (
            <Icon name='bacsinam' size={size} />
          ) : (
            <Icon name='bacsinu' size={size} />
          )
          const active = checkActive(item, props) ? styles.active : ''
          return (
            <li key={item.id} className={active}>
              <div className={styles.card}>
                <figure>{img}</figure>
                <div
                  className={styles.bodyCard}
                  onClick={() => clickItem({ item, props })}
                >
                  <p>{item.hocvi}</p>
                  <p className='bold'>{item.detail.name}</p>
                  <p className={styles.txtCK}>{item.detail.subject}</p>
                  <p>Giới tính: {sex}</p>
                </div>
                <Icon name='love' fill={'#CBD2D9'} size='30' />
              </div>
              <div className={styles.datkham}>
                <p>
                  <span className={styles.txtTime}>Giờ khám gần nhất:</span>
                  <br />
                  <span>{item.giocan}</span>
                </p>
                <button
                  className={styles.btn}
                  onClick={() => clickItem({ item, props })}
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
