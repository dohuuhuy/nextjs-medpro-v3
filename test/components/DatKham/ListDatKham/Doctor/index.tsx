import React from 'react'
import styles from './styles.module.less'
import { Row, Col } from 'antd'
import { listenerCount } from 'process'

export const DoctorContent = () => {
  return (
    <Row className={styles.rowDoctor}>
      <Col span="24" className={styles.colFilter}>
        <div>Loc</div>
      </Col>
      <Col span="24" className={styles.colListDoctor}>
        <ul className={styles.listCard}>
          <li>
            <div className={styles.cardContent}>
              Nam
            </div>
          </li>
        </ul>
      </Col>
    </Row>

  )
}
