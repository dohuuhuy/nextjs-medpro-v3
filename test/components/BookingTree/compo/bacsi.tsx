import React from 'react'
import { Icon } from '../../Icon'
import { checkActive, selected } from '../utils'
import styles from './../less/bacsi.module.less'

export const BacSi = (props: any) => {
  console.log('props BacSi :>> ', props)

  return (
    <section className={styles.bacSi}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input placeholder='Tìm nhanh bác sĩ' />
      </div>

      <ul className={styles.listBacSi}>
        {props.data.map((v: any) => {
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
                <div className={styles.bodyCard}>
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
                <button className={styles.btn} onClick={selected(v, props)}>
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
