import { Space } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { CardFooter } from './cardFooter'
import { HandleFilter } from './components/func'
import { Personal } from '../utils/interface'
import { uniqueId } from 'lodash'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/motion'

export const HoSo = (props: Personal) => {
  const Filter = HandleFilter(props)
  const [show, setishow] = useState(false)

  const onShow = (index: any) => {
    setishow(show !== index ? index : '')
  }

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
    >
      <h2>Danh sách hồ sơ bệnh nhân</h2>
      <motion.ul className={styles.listCard} variants={stagger}>
        {Filter.map((item: any, index: any) => {
          const isShowCardFooter = show === index ? '' : styles.hidden
          return (
            <motion.li key={index + 'd'} variants={fadeInUp}>
              <div className={styles.cardProfile}>
                <div className={styles.cardBody} onClick={() => onShow(index)}>
                  <ul className={styles.listItem}>
                    {item.map(({ key, value, icon }: any, i: number) => {
                      const style =
                        show === index
                          ? styles.cardItem
                          : i > 2
                          ? styles.hidden
                          : styles.cardItem
                      return (
                        <li key={uniqueId()}>
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
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  )
}
