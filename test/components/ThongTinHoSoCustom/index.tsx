import {
  BellOutlined,
  FileTextOutlined,
  ProfileOutlined
} from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Col, Row, Tabs } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import { HoSo } from './HoSo'
import { PhieuKhamBenh } from './PhieuKhamBenh'

export interface Personal {
  listUser: User[],
  listBooking: Booking[],
  listNotice: Notice[],
}

export interface User {
  fullname: string,
  birthdate: string,
  mobile: string,
  sex: number,
  nation: { name: string },
  fullAddress: string
}

export interface Booking {
  name: string,
  surname: string,
  bookings: listBooking[]
}

export interface listBooking {
  partner: { name: string },
  subject: { name: string },
  service: { name: string },
  date: string,
  description: string
}

export interface Notice {
  fullname: string
}
const { TabPane } = Tabs

export const ThongTinHoSoCustom = (props: Personal) => {
  return (
    <Container>
      <Row className={styles.rowInfomation}>
        <Col span='24'>
          <Tabs defaultActiveKey='1' tabPosition='left' className={styles.tabs}>
            <TabPane
              className={styles.item}
              key='1'
              tab={
                <span>
                  <ProfileOutlined />
                  Hồ sơ bệnh nhân
                </span>
              }
            >
              <HoSo {...props} />
            </TabPane>
            <TabPane
              className={styles.item}
              key='2'
              tab={
                <span>
                  <FileTextOutlined />
                  Phiếu khám bệnh
                </span>
              }
            >
              <PhieuKhamBenh {...props} />
            </TabPane>
            <TabPane
              key='3'
              tab={
                <span>
                  <BellOutlined />
                  Thông tin
                </span>
              }
            >
              Content of Tab 3
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export const list = [
  {
    icon: <ProfileOutlined />,
    name: 'File',
    title: 'Hồ sơ bệnh nhân'
  },
  {
    icon: <FileTextOutlined />,
    name: 'Card',
    title: 'Phiếu khám bệnh'
  },
  {
    icon: <BellOutlined />,
    name: 'Noti',
    title: 'Thông báo'
  }
]
