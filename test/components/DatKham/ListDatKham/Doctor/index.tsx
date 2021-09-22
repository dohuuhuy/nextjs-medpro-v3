import React from 'react'
import styles from './styles.module.less'
import { Row, Col, Button, Select } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import Man from './images/DoctorMan.svg'
import Image from 'next/image'

export const DoctorContent = () => {
  return (
    <Row className={styles.rowDoctor}>
      <Col xl={24} className={styles.colFilter}>
        <ul className={styles.listFilter}>
          <li>
            <Select className={styles.selectFilter} style={{ width: '100%' }} placeholder="Học hàm/học vị" />
          </li>
          <li>
            <Select className={styles.selectFilter} style={{ width: '100%' }} placeholder="Chuyên khoa" />
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
                    <Image src={Man} width={100} height={100} />
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
                <HeartFilled color='#CBD2D9' />
                <Button type='primary' >Đặt khám</Button>
              </div>
            </div>

          </li>
          <li>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <div className={styles.cardBody}>
                  <figure className={styles.cardImg}>
                    <Image src={Man} width={100} height={100} />
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
