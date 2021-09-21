import React from 'react'
import styles from './styles.module.less'
import { Row, Col, Button, Select } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { Icon } from '@componentsTest/Icon'

export const DoctorContent = () => {
  return (
    <Row className={styles.rowDoctor}>
      <Col xl={24} className={styles.colFilter}>
        <ul>
          <li>
            <div className={styles.FilterSpecialist}>
              <Select placeholder="Học hàm/học vị" menuItemSelectedIcon />
            </div>
          </li>
          <li>
            <div className={styles.FilterSpecialist}>
              <Select placeholder="Chuyên khoa" />
            </div>
          </li>
        </ul>
      </Col>
      <Col xl={24} className={styles.colListDoctor}>
        <ul className={styles.listCard}>
          <li>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <div className={styles.cardBody}>
                  <figure className={styles.cardImg}>
                    <Icon name='Woman' size='100' />
                  </figure>
                  <div className={styles.cardText}>
                    <p>GS.TS</p>
                    <p>NGUYỄN VĂN A</p>
                    <p>Y học gia đình - Nhi</p>
                    <p>Giới tính: <span>Nam</span></p>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <p>GIờ khám gần nhất</p>
                  <p><span>10:00</span> - 13/07</p>
                </div>
              </div>
              <div className={styles.cardFunc}>
                <HeartFilled />
                <Button type='primary' >Đặt khám</Button>
              </div>
            </div>

          </li>
          <li>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <div className={styles.cardBody}>
                  <figure className={styles.cardImg}>
                    <Icon name='Woman' size='100' />
                  </figure>
                  <div className={styles.cardText}>
                    <p>GS.TS</p>
                    <p>NGUYỄN VĂN A</p>
                    <p>Y học gia đình - Nhi</p>
                    <p>Giới tính: <span>Nam</span></p>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <p>GIờ khám gần nhất</p>
                  <p><span>10:00</span> - 13/07</p>
                </div>
              </div>
              <div className={styles.cardFunc}>
                <HeartFilled />
                <Button type='primary' >Đặt khám</Button>
              </div>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  )
}
