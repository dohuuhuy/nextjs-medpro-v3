import React from 'react'
import styles from './styles.module.less'
import { Row, Tabs } from 'antd'
import Container from '@componentsTest/Container'
import { ChuaKhamCustom } from './ChuaKhamCustom'
import { DaKhamCustom } from './DaKhamCustom'

const { TabPane } = Tabs
export const TaoHoSo = () => {
  return (
    <Container>
      <Row>
        <Tabs defaultActiveKey='1' className={styles.tabs}>
          <TabPane
            className={styles.item}
            key='1'
            tab='Chưa từng khám'
          >
            <ChuaKhamCustom />
          </TabPane>
          <TabPane
            className={styles.item}
            key='2'
            tab='Đã từng khám'
          >
            <DaKhamCustom />
          </TabPane>
        </Tabs>
      </Row>
    </Container>
  )
}
