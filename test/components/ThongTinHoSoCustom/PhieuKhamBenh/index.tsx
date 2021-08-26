import React from 'react'
import styles from './styles.module.less'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { HandleFilter } from './components/func'

export interface Medthods {
  listUser: any[]
}


export const PhieuKhamBenh = (Props: Medthods) => {
  const Filter = HandleFilter(Props)
  console.log("Filter ", Filter)
  return (
    <div className={styles.Container}>
      <h1>Danh sách phiếu khám bệnh</h1>
      <ul className={styles.listUser}>
        {Filter.map((listUser: any, i: any) => {
          // const isShowCardFooter = show === index ? '' : styles.hidden
          console.log('item', listUser[0], listUser[1])
          return (
            <li key={i + "d"}>
              <div className={styles.cardHeader}>
                <p>{listUser[0]}</p>
                <DownOutlined />
              </div>
              <ul className={styles.listExam}>
                {listUser[1].map((item: any, i: any) => {
                  return (
                    <li key={i + "d"}>
                      <ul>
                        {item.map(({ key, value }: any, i: any) => {
                          return (
                            <li key={i + "d"}>
                              <div>{key}</div>
                              <div>{value}</div>
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
