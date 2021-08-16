/* eslint-disable no-console */
import {
  CalendarOutlined,
  CustomerServiceOutlined,
  IdcardOutlined,
  SolutionOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { Col, Row, Steps } from 'antd'
import React, { useState } from 'react'
import Container from '../Container'
import { StepsAction } from './organisms'
import styles from './styles.module.less'

const { Step } = Steps

export interface Props {
  info: any
}

export const BookingInformation = ({ info }: Props) => {
  const [current, setcurrent] = useState(0)

  return (
    <Container className={styles.BookingInformation}>
      <Row className={styles.rowName}>
        <Col className={styles.colName} xl={24} span={24}>
          <div className={styles.cardInfo}>
            <figure className={styles.cardView}>
              <img src={info?.image} alt='logo' />
            </figure>
            <div className={styles.cardBody}>
              <h2>{info?.name}</h2>
              <p className={styles.address}>
                <em>{info?.address}</em>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className={styles.rowSteps}>
        <Col xl={24} xs='24' className={styles.colSteps}>
          <Steps
            current={current}
            className={styles.steps}
            responsive
            labelPlacement='horizontal'
            size='small'
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} icon={item.icon} />
            ))}
          </Steps>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        <Col
          xl={7}
          lg={7}
          md={24}
          sm={24}
          xs={24}
          className={styles.colInfoBooking}
        >
          <div className={styles.cardInfoBooking}>
            <div className={styles.cardHeader}>Thông tin khám</div>
            <div className={styles.cardBody}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </div>
          </div>
        </Col>
        <Col
          xl={17}
          lg={17}
          md={24}
          sm={24}
          xs={24}
          className={styles.colStepsContent}
        >
          <div className={styles.stepsContent}>{steps[current].content}</div>
        </Col>
      </Row>
      <Row className={styles.rowStepsAction}>
        <Col xl={24} xs='24' className={styles.colStepsAction}>
          <StepsAction
            current={current}
            setcurrent={setcurrent}
            steps={steps}
          />
        </Col>
      </Row>
    </Container>
  )
}

export const Demo = () => {
  return (
    <div>
      First-content huyi
      <h2>Helo</h2>
    </div>
  )
}

const steps = [
  {
    title: 'Dịch vụ',
    icon: <CustomerServiceOutlined style={{ color: '#1da1f2' }} />,
    content: <Demo />
  },
  {
    title: 'Chuyên khoa',
    icon: <IdcardOutlined style={{ color: '#1da1f2' }} />,
    content: 'Second-content'
  },
  {
    title: 'Bác sỉ',
    icon: <UsergroupAddOutlined style={{ color: '#1da1f2' }} />,
    content: 'Last-content'
  },
  {
    title: 'Ngày khám',
    icon: <CalendarOutlined color='red' style={{ color: '#1da1f2' }} />,
    content: 'Last-content'
  },
  {
    title: 'Hồ sơ',
    icon: <SolutionOutlined style={{ color: '#1da1f2' }} />,
    content: 'Last-content'
  },
  {
    title: 'Xác nhận',
    icon: <SolutionOutlined style={{ color: '#1da1f2' }} />,
    content: 'Last-content'
  }
]
