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
import { ThongBao } from './ThongBao'
import { Personal } from './utils/interface'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
const { TabPane } = Tabs

export const ThongTinHoSoCustom = (props: Personal) => {
  const router = useRouter()
  console.log('props :>> ', props);
  return (
    <Container>
      <Row className={styles.rowInfomation}>
        <Col span='24'>
          <Tabs defaultActiveKey={`${router.query.activeItem}`} tabPosition='left' className={styles.tabs}>
            <TabPane
              className={styles.item}
              key='1'
              tab={
                <span className={styles.tabsitem}>
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
              <ThongBao {...props} />
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
