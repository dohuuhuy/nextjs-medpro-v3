/* eslint-disable no-console */
import {
  CalendarOutlined,
  CustomerServiceOutlined,
  IdcardOutlined,
  SolutionOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { ChonDichVu } from '@componentsTest/ThongTinDatKham/ChonDichVu'
import { Col, Row, Steps } from 'antd'
import React, { useState } from 'react'
import Container from '../Container'
import { ChonChuyenKhoa } from './ChonChuyenKhoa'
import { CardInfo } from './organisms/CardInfo'
import { StepsAction } from './organisms/StepsAction'
import styles from './styles.module.less'

const { Step } = Steps

export interface Props {
  info: any
  bookingTree: any
}

export const ThongTinDatKham = ({ info, bookingTree }: Props) => {
  console.log('bookingTree :>> ', bookingTree)

  const stepBooking = bookingTree?.path?.split('_') || []

  console.log('stepBooking :>> ', stepBooking)

  const [current, setcurrent] = useState(0)

  const [quickView, setquickView] = useState([])

  console.log('quickView :>> ', quickView)

  const steps: any = [
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

  for (let index = 0; index < stepBooking.length; index++) {
    const item = stepBooking[index]

    if (item === 'service') {
      steps.splice(index, 0, {
        title: 'Dịch vụ',
        icon: <CustomerServiceOutlined style={{ color: '#1da1f2' }} />,
        content: (
          <ChonDichVu
            bookingTree={bookingTree}
            quickView={quickView}
            setquickView={setquickView}
            current={current}
            setcurrent={setcurrent}
          />
        )
      })
    } else if (item === 'subject') {
      steps.splice(index, 0, {
        title: 'Chuyên khoa',
        icon: <IdcardOutlined style={{ color: '#1da1f2' }} />,
        content: (
          <ChonChuyenKhoa
            quickView={quickView}
            setquickView={setquickView}
            current={current}
            setcurrent={setcurrent}
          />
        )
      })
    } else if (item === 'doctor') {
      steps.splice(index, 0, {
        title: 'Bác sỉ',
        icon: <UsergroupAddOutlined style={{ color: '#1da1f2' }} />,
        content: 'Last-content'
      })
    }
  }

  return (
    <Container className={styles.BookingInformation}>
      <Row className={styles.rowName}>
        <Col className={styles.colName} xl={24} span={24}>
          <CardInfo info={info} />
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
            {steps?.map((item: any, i: number) => (
              <Step
                key={item.title}
                title={item.title}
                icon={item.icon}
                onClick={() => setcurrent(i)}
              />
            ))}
          </Steps>
        </Col>
      </Row>

      <Row className={styles.rowContent}>
        <Col xl={7} lg={7} span={24} className={styles.colInfoBooking}>
          <div className={styles.cardInfoBooking}>
            <div className={styles.cardHeader}>Thông tin khám</div>
            <div className={styles.cardBody}>
              {quickView?.map(({ key, value }, i) => {
                return (
                  <p key={i}>
                    {key}: {value}
                  </p>
                )
              })}
            </div>
          </div>
        </Col>
        <Col xl={17} lg={17} span={24} className={styles.colStepsContent}>
          <div className={styles.cardStepsContent}>
            <div className={styles.cardHeader}>
              Vui lòng {steps[current]?.title === 'Xác nhận' ? '' : 'chọn'}{' '}
              {steps[current]?.title}
            </div>
            <div className={styles.cardBody}>{steps[current].content}</div>
          </div>
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
