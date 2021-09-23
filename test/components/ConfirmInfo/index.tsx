import React from 'react'
import styles from './styles.module.less'
import { CardFee } from '../CardFee'
import Container from '@componentsTest/Container'
import { Col, Row } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { uniqueId } from 'lodash'


export const ConfirmInfo = () => {
  const HandleModile = (text: string) => {
    const str1 = text.slice(0, 4)
    const str2 = text.slice(4, 7)
    const str3 = text.slice(7, 10)
    return str1.concat(" " + str2 + " " + str3)
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
    },
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
    },
  ]
  return (
    <Container>
      <Row className={styles.rowInfo}>
        <h3>XÁC NHẬN THÔNG TIN</h3>
        <Col xl={16} className={styles.colInfo}>
          <div className={styles.ProfileBooking}>
            <p>Hồ sơ đặt khám</p>
            <ul className={styles.listViewProfile}>
              <li>
                <div>
                  abc
                </div>
              </li>
              <li>
                <div>
                  abc
                </div>
              </li>
            </ul>
            <div className={styles.cardProfile}>
              <ul className={styles.listItem}>
                {Profile.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <div>
                        <p>{title}<span>{value}</span></p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={styles.InfoBooking}>
            <p>Thông tin đặt khám</p>
            <div className={styles.cardInfo}>
              <ul className={styles.listItem}>
                {Info.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <p>{title}<span>{value}</span></p>
                    </li>
                  )
                })}
              </ul>
              <CloseCircleOutlined />
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
