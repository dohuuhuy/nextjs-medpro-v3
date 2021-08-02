/* eslint-disable no-console */
import Container from './../Container'
import React, { useState } from 'react'
import { Button, Col, message, Row, Steps } from 'antd'
const { Step } = Steps
export const BookingInformation = () => {
  const [current, setcurrent] = useState(0)

  // const onChange = (current: any) => {
  //   console.log('onChange:', current)
  //   setcurrent(current)
  // }

  const next = () => {
    setcurrent(current + 1)
  }

  const prev = () => {
    setcurrent(current - 1)
  }

  return (
    <Container>
      <Row>
        <Col xl={24}>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className='steps-content'>{steps[current].content}</div>
          <div className='steps-action'>
            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => next()}>
                Tiếp theo
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type='primary'
                onClick={() => message.success('Processing complete!')}
              >
                Hoàn thành
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Quay lại
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const steps = [
  {
    title: 'Dịch vụ',
    content: 'First-content'
  },
  {
    title: 'Chuyên khoa',
    content: 'Second-content'
  },
  {
    title: 'Bác sỉ',
    content: 'Last-content'
  },
  {
    title: 'Ngày khám',
    content: 'Last-content'
  },
  {
    title: 'Hồ sơ',
    content: 'Last-content'
  },
  {
    title: 'Xác nhận',
    content: 'Last-content'
  }
]
