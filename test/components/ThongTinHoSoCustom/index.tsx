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

const { TabPane } = Tabs

interface ListTabs {
  key: string
  title: JSX.Element
  content: JSX.Element
}

export const ThongTinHoSoCustom = (props: Personal) => {
  const listTabs: ListTabs[] = [
    {
      key: 'hsbn',
      title: (
        <span className={styles.tabsitem}>
          <ProfileOutlined />
          Hồ sơ bệnh nhân
        </span>
      ),
      content: <HoSo {...props} />
    },
    {
      key: 'pkb',
      title: (
        <span>
          <FileTextOutlined />
          Phiếu khám bệnh
        </span>
      ),
      content: <PhieuKhamBenh {...props} />
    },
    {
      key: 'tb',
      title: (
        <span>
          <BellOutlined />
          Thông báo
        </span>
      ),
      content: <ThongBao {...props} />
    }
  ]

  return (
    <Container>
      <Row className={styles.rowInfomation}>
        <Col span='24'>
          <Tabs tabPosition='left'>
            {listTabs?.map((e) => {
              return (
                <TabPane key={e.key} tab={e.title}>
                  {e.content}
                </TabPane>
              )
            })}
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}
