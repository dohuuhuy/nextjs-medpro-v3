import React, { useState } from 'react'
import { Space } from 'antd'
import styles from './styles.module.less'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { HandleFilter } from './components/func'
export interface Medthods {
  listUser: any[]
}


export const PhieuKhamBenh = (Props: Medthods) => {
  const Filter = HandleFilter(Props)
  const [show, setishow] = useState(false)

  const onShow = (index: any) => {
    console.log("index ", index)
    setishow(show !== index ? index : '')
  }
  return (
    <div className={styles.Container}>
      <h1>Danh sách phiếu khám bệnh</h1>
      <ul className={styles.listUser}>
        {Filter.map((listUser: any, index: any) => {
          return (
            <li key={index + "d"}>
              <div className={show === index ? styles.cardHeaderActive : styles.cardHeaderInactive} onClick={() => onShow(index)}>
                <span>{listUser[0]}</span>
                {show === index ? <UpOutlined /> : <DownOutlined />}
              </div>
              <ul className={show === index ? styles.listExam : styles.hidden}>
                {listUser[1].map((listUserItem: any, i: any) => {
                  return (
                    <li key={i + "d"}>
                      <ul className={styles.listExamItem}>
                        {listUserItem.map(({ key, value }: any, i: any) => {
                          return (
                            <li key={i + "d"}>
                              <div className={styles.cardView}>
                                <div className={styles.itemKeys}>
                                  <p >{key}</p>
                                </div>
                                <div className={styles.itemValues}>
                                  <p >{value}</p>
                                </div>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
