import React from 'react'
import { Icon } from '../../Icon'
import styles from './../less/bacsi.module.less'

export const BacSi = () => {
  return (
    <section className={styles.bacSi}>
      <ul className={styles.listBacSi}>
        {bacsi.map((v, i) => {
          const size = '100'
          const sex = v.gioitinh ? 'Nam' : 'Nữ'
          const img = v.gioitinh ? (
            <Icon name='bacsinam' size={size} />
          ) : (
            <Icon name='bacsinu' size={size} />
          )
          return (
            <li key={i}>
              <div className={styles.card}>
                <figure>{img}</figure>
                <div className={styles.bodyCard}>
                  <p>{v.hocvi}</p>
                  <p className='bold'>{v.ten}</p>
                  <p className={styles.txtCK}>{v.chuyenkhoa}</p>
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
                <button className={styles.btnDat}>Đặt khám</button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const bacsi = [
  {
    hocvi: 'GS.TS',
    ten: 'Nguyen Van A',
    gioitinh: 1,
    chuyenkhoa: 'Y học gia đình - Nhi',
    giocan: '19:00 - 13/07'
  },
  {
    hocvi: 'GS.TS',
    ten: 'Tu Van B',
    gioitinh: 0,
    chuyenkhoa: 'Y học gia đình - Nhi',
    giocan: '15:30 - 14/07'
  },
  {
    hocvi: 'GS.TS',
    ten: 'La Hoan Chi',
    gioitinh: 1,
    chuyenkhoa: 'Y học gia đình - Nhi',
    giocan: '05:00 - 13/07'
  }
]
