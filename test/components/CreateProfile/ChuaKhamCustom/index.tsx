import React from 'react'
import styles from './styles.module.less'
import { useForm, Controller } from 'react-hook-form'
export const ChuaKhamCustom = () => {
  return (
    <div className={styles.container}>
      <form>
        <div>
          <label>Họ và tên (có dấu)</label>
          <input placeholder={"Nhập Họ và tên"} />
        </div>
        <div>
          <label>Ngày tháng năm sinh</label>
          <select >
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </form>
    </div>
  )
}
