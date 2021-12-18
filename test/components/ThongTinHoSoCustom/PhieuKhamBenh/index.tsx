import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { HandleFilter } from './components/func'
import styles from './styles.module.less'
import { Personal } from '../utils/interface'
import { uniqueId } from 'lodash'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/motion'

export const PhieuKhamBenh = (Props: Personal) => {
  const Filter = HandleFilter(Props)
  const [show, setishow] = useState(false)

  const onShow = (index: any) => {
    setishow(show !== index ? index : '')
  }
  return (
    <motion.div
      className={styles.Container}
      initial='initial'
      animate='animate'
    >
      <h1>Danh sách phiếu khám bệnh</h1>
      <motion.ul className={styles.listUser} variants={stagger}>
        {Filter?.map((listUser: any, index: any) => {
          return (
            <motion.li key={uniqueId()} variants={fadeInUp}>
              <div
                className={
                  show === index
                    ? styles.cardHeaderActive
                    : styles.cardHeaderInactive
                }
                onClick={() => onShow(index)}
              >
                <span>{listUser[0]}</span>
                {show === index ? <UpOutlined /> : <DownOutlined />}
              </div>
              <ul className={show === index ? styles.listExam : styles.hidden}>
                {listUser[1].map((listUserItem: any, i: any) => {
                  return (
                    <li key={i + 'd'}>
                      <ul className={styles.listExamItem}>
                        {listUserItem.map(({ key, value }: any, i: any) => {
                          return (
                            <li key={i + 'd'}>
                              <div className={styles.cardView}>
                                <div className={styles.itemKeys}>
                                  <p>{key}</p>
                                </div>
                                <div className={styles.itemValues}>
                                  <p>{value}</p>
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
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  )
}
