/* eslint-disable no-console */
import { Button } from 'antd'
import React, { useState, useEffect, useMemo } from 'react'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'
import { find, isArray } from 'lodash'
import { UserAddOutlined } from '@ant-design/icons'
import { CardFooter } from './cardFooter'
import Container from '@components/atoms/Container'
import { HandleFilter } from './Components/func'
export const ChonHoSo = (Props: Medthods) => {
  const Filter = HandleFilter(Props)
  // const [Faq, setFaq] = useState({
  //   id: 1,
  //   faq: []
  // })
  // useEffect(() => {
  //   if (isArray(Props?.listPatient)) {
  //     handlerSetFaqbyTab(1)
  //   }
  // }, [])

  // const handlerSetFaqbyTab = (id: any) => {
  //   const item = find(Props?.listPatient, { id })
  //   setFaq(item)
  // }
  // const x = (id: any) => handlerSetFaqbyTab(id)
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {Filter.map((item: any, index: any) => {
          return (
            <li key={index}>
              <div className={styles.cardProfile}>
                <div className={styles.cardBody}>
                  <ul className={styles.listItem}>
                    {item.map(({ id, Key, Value }: any) => (
                      <li key={id} >
                        <div
                          className={
                            id < 5 ? styles.cardItem : styles.hidden
                          }
                        >
                          <div className={styles.itemKeys}>
                            <figure className={styles.itemView}>
                              <UserAddOutlined />
                            </figure>
                            <p>{Key}</p>
                          </div>
                          <div className={styles.itemValues}>
                            <p>{Value}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <CardFooter />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
