import { LoadingOutlined } from '@ant-design/icons'
import { Col, Row, Spin } from 'antd'
import React from 'react'
import Container from '../Container'

import styles from './styles.module.less'

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin={true} />

  return (
    <Container className={styles.containerLoading}>
      <Row className={styles.rowLoading}>
        <Col xl={24} className={styles.colLoading}>
          <Spin indicator={antIcon} />
        </Col>
      </Row>
    </Container>
  )
}

export default Loading
