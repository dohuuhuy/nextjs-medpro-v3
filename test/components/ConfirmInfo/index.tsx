import React from 'react'
import styles from './styles.module.less'
import { CardFee } from '../CardFee'
import Container from '@componentsTest/Container'
import { Col, Row, Button } from 'antd'
import { uniqueId } from 'lodash'
import { Icon } from '../Icon'
import { Info, Profile } from './utils/data'


export const ConfirmInfo = () => {
  const fullData = 1
  return (
    <Container className={styles.container}>
      <Row className={styles.rowInfo}>
        <h3>XÁC NHẬN THÔNG TIN</h3>
        <Col xl={16} className={styles.colInfo}>
          <div className={styles.ProfileBooking}>
            <h4>Hồ sơ đặt khám</h4>
            <ul className={styles.listViewProfile}>
              <li>
                <div className={styles.viewProfile}>
                  <Button className={styles.btnProfile} icon={<Icon name="plus" size='20' />} />
                  <p>Tạo hồ sơ</p>
                </div>
              </li>
              <li>
                <div className={styles.viewProfile}>
                  <Button className={styles.btnProfile} icon={<Icon name="bacsinam" size='55' />} />
                  <p>Minh Anh</p>
                </div>
              </li>
            </ul>
            <div className={fullData ? styles.cardComplete : styles.cardIncomplete}>
              <ul className={styles.listItem}>
                {Profile.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <div className={styles.cardItem}>
                        <p>
                          <span className={styles.title}>{title}</span>
                          <span className={styles.value}>{value}</span>
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className={styles.button}>
                <Icon name='searchplus' size='20' />
              </div>
            </div>
          </div>
          <div className={styles.InfoBooking}>
            <h4>Thông tin đặt khám</h4>
            <div className={styles.cardInfo}>
              <ul className={styles.listItem}>
                {Info.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <div className={styles.cardItem}>
                        <p>
                          <span className={styles.title}>{title}</span>
                          <span className={styles.value}>{value}</span>
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className={styles.button}>
                <Icon name='close' size='25' />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <CardFee />
        </Col>
      </Row>
    </Container>
  )
}
