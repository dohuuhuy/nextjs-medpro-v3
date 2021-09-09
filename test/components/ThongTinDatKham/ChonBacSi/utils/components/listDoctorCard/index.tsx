import React from 'react'
import styles from './styles.module.less'
import { Space } from 'antd'
import { uniqueId } from 'lodash'
interface listDoctorCard {
  listCard: any
}

export const ListDoctor = ({ listCard }: listDoctorCard) => {
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {listCard.map((item: any) => {
          return (
            <li key={uniqueId()}>
              <div className={styles.cardView}>
                <ul className={styles.listItem}>
                  {item.map(({ key, value, icon }: any) => {
                    return (
                      <li key={uniqueId()}>
                        <div className={styles.itemCard}>
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}
