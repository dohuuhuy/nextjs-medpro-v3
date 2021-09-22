import React from 'react'
import styles from './styles.module.less'
import { Radio } from 'antd'

export const ServiceContent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.listService}>
        <li>
          <div className={styles.cardService}>
            <p>Khám thường</p>
            <strong>0<span>VNĐ</span></strong>
          </div>
        </li>
        <li>
          <div className={styles.cardService}>
            <p>Khám thường</p>
            <strong>0<span>VNĐ</span></strong>
          </div>
        </li>
        <li>
          <div className={styles.cardService}>
            <p>Khám thường</p>
            <strong>0<span>VNĐ</span></strong>
          </div>
        </li>
      </ul>
      <Radio.Group className={styles.RadioGroup}>
        <p>Bạn có bảo hiểm y tế không ?</p>
        <Radio value={1}>Có</Radio>
        <Radio value={0}>Không</Radio>
      </Radio.Group>
    </div>
  )
}
