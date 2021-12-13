import React from 'react'
import styles from './styles.module.less'
import { Row } from 'antd'
import { Personal } from '../utils/interface'
import { uniqueId } from 'lodash'
import moment from 'moment'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/motion'
import Link from 'next/link'

export const ThongBao = (Props: Personal) => {

  const handleTransTime = (time: any) => (
    "NGÀY " + moment(time).format(`DD`) + " THÁNG " + moment(time).format(`MM, YYYY`)
  )
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate="animate">
      <h2>Danh sách thông báo</h2>
      <Row className={styles.rowProduce}>
        <motion.ul className={styles.step} variants={stagger}>
          {Props.listNotice.map((item) => {
            console.log('kiểm tra notic :>> ', item);
            return (
              <motion.li key={uniqueId()} className={styles.rowStep} variants={fadeInUp}>
                <div className={styles.dot} />
                <div className={styles.colContent}>
                  <b className={styles.titleStep}>{handleTransTime(item.createdAt)}</b>
                  <p className={styles.view_content}>{item.title}</p>
                  <Link
                    href={`/chi-tiet-phieu-kham?transactionId=${item?.eventData.transactionId}`}
                  >
                    <a className={styles.detail}>Xem chi tiết...</a>
                  </Link>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </Row>
    </motion.div>
  )
}
