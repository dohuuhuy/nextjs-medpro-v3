/* eslint-disable no-console */
import { Space } from 'antd'
import React, { useState } from 'react'
import { Medthods } from '../utils/interface'
import { CardFooter } from './cardFooter'
import { HandleFilter } from './Components/func'
import styles from './styles.module.less'
export const ChonHoSo = (Props: Medthods) => {
  const Filter = HandleFilter(Props)
  const [show, setishow] = useState(false)

  const onShow = (index: any) => {
    console.log('index ', index)
    setishow(show !== index ? index : '')
  }

  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {Filter.map((item: any, index: any) => {
          const isShowCardFooter = show === index ? '' : styles.hidden
          return (
            <li key={index + 'd'}>
              <div className={styles.cardProfile}>
                <div className={styles.cardBody} onClick={() => onShow(index)}>
                  <ul className={styles.listItem}>
                    {item.map(({ id, key, value, icon }: any, i: number) => {
                      const style =
                        show === index
                          ? styles.cardItem
                          : i > 2
                          ? styles.hidden
                          : styles.cardItem
                      return (
                        <li key={id + i}>
                          <div className={style}>
                            <Space>
                              <Space className={styles.itemKeys}>
                                <p>{icon}</p> {key && <p>{key}</p>}
                              </Space>
                              <p className={styles.itemValues}>{value}</p>
                            </Space>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <CardFooter className={isShowCardFooter} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
