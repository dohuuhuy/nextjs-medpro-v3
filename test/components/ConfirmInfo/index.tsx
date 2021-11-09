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
                  <Button
                    className={styles.btnProfile}
                    icon={<Icon name='plus' size='20' />}
                  />
                  <p>Tạo hồ sơ</p>
                </div>
              </li>
              <li>
                <div className={styles.viewProfile}>
                  <Button
                    className={styles.btnProfile}
                    icon={<Icon name='bacsinam' size='55' />}
                  />
                  <p>Minh Anh</p>
                </div>
              </li>
            </ul>
            <div className={fullData ? styles.cardComplete : styles.cardIncomplete}>
              <ul className={styles.listItem}>
                {Profile.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
<<<<<<< HEAD
            </div>
          </div>
          <div className={styles.InfoBooking}>
            <h4>Thông tin đặt khám</h4>
            <div className={styles.cardInfo}>
              <ul className={styles.listItem}>
                {Info.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
<<<<<<< HEAD
                      <div className={styles.cardItem}>
                        <p>
                          <span className={styles.title}>{title}</span>
                          <span className={styles.value}>{value}</span>
=======
                      <div className={styles.cardBody}>
                        <p>
                          {title}
                          <span>{value}</span>
>>>>>>> 1776f93640f08a22556bf8d7ed62a1c16f4fdaba
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
<<<<<<< HEAD
              <div className={styles.button}>
                <Icon name='close' size='25' />
              </div>
=======
>>>>>>> 1776f93640f08a22556bf8d7ed62a1c16f4fdaba
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

const HandleModile = (text: string) => {
  const str1 = text.slice(0, 4)
  const str2 = text.slice(4, 7)
  const str3 = text.slice(7, 10)
  return str1.concat(' ' + str2 + ' ' + str3)
}
const Profile = [
  {
    title: '',
    value: 'Huỳnh Ngọc Toàn (Bạn)'
  },
  {
    title: 'Giới tính:',
    value: 'Nam'
  },
  {
    title: 'Ngày sinh:',
    value: '24/12/2021'
  },
  {
    title: 'Số điện thoại:',
    value: HandleModile('0903232223')
  }
]
const Info = [
  {
    title: 'Hình thức khám:',
    value: 'Dịch vụ'
  },
  {
    title: 'Bác sĩ:',
    value: 'Nguyễn Văn A'
  },
  {
    title: 'Chuyên khoa:',
    value: 'Răng Hàm Mặt'
  },
  {
    title: 'Ngày khám:',
    value: '12/12/2022'
  },
  {
    title: 'Giờ khám:',
    value: '07:30'
  }
]
