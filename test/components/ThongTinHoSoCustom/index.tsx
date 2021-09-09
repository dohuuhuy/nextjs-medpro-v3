import {
  BellOutlined,
  FileTextOutlined,
  ProfileOutlined
} from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Col, Row, Tabs } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export interface Personal {
  listUser: User[],
  listBooking: Booking[],
  listNotice: Notice[],
}

export interface User {
  fullname: string
}

export interface Booking {
  fullname: string
}

export interface Notice {
  fullname: string
}
const { TabPane } = Tabs

export const ThongTinHoSoCustom = () => {
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
              Content of Tab 1
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
              Content of Tab 2
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
