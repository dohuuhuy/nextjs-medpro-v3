import { checkActive, selected } from '../utils'
import styles from './../less/dichvu.module.less'
import cx from 'classnames'
import React from 'react'

export const DichVu = (props: any) => {
  // console.log('props DichVu :>> ', props)

  const [BHYT, setBHYT] = React.useState(false)

  const checkBHYT = (v: any) => () => {
    setBHYT(v.detail.serviceType === 'INSURANCE_ONLY')
  }

  return (
    <section className={styles.dichVu}>
      <ul className={styles.groupBtn}>
        {props.data.map((v: any) => {
          const active = checkActive(v, props) ? styles.active : ''
          return (
            <li key={v.id} onClick={checkBHYT(v)}>
              <button
                className={cx(styles.btn, active)}
                onClick={selected(v, props)}
              >
                <span>{v.detail.name}</span>
                <span>{v.detail.price} VND</span>
              </button>
            </li>
          )
        })}
      </ul>
      {BHYT && (
        <div className={styles.questionBHYT}>
          <span>Bạn có bảo hiểm y tế không?</span>
          <div className={styles.groupRadio}>
            <div className={styles.radio}>
              <input type='radio' value='1' /> có
            </div>
            <div className={styles.radio}>
              <input type='radio' value='2' /> không
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
