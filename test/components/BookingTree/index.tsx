import { Col, Collapse, Row, Space } from 'antd'
import cx from 'classnames'
import { indexOf } from 'lodash'
import React, { useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import styles from './less/styles.module.less'
import { Stepper } from './stepper'
import { colLeft, colRight, Steps, steps } from './utils'

export interface BookingTreeIF {
  bookingTree: any
}

export interface State {
  stepper: Steps[]
}

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const [state, setstate] = useState<any>({
    stepper: handlerStep({ bookingTree }),
    name: ''
  })

  if (!bookingTree) return null
  console.log('state :>> ', state)
  return (
    <section>
      <Stepper />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <Space direction='vertical' className={styles.listTree}>
              {state.stepper.map((v: Steps, i: any) => {
                return (
                  v.sort >= 0 && (
                    <Collapse
                      key={i}
                      className={styles.card}
                      expandIconPosition='right'
                      bordered={false}
                    >
                      <Collapse.Panel
                        className={cx(styles.content)}
                        header={
                          <div className={styles.header}>
                            <h3>{v.title}</h3>
                            <div className={cx(styles.input)}>
                              {v.icon}
                              <span>
                                {v.selected.name ||
                                  'Chọn ' + v.title.toLowerCase()}
                              </span>
                            </div>
                          </div>
                        }
                        key={i}
                      >
                        {v?.content({
                          keys: v.key,
                          state,
                          setstate,
                          data: v.data
                        })}
                      </Collapse.Panel>
                    </Collapse>
                  )
                )
              })}
            </Space>
          </Col>
          <Col {...colRight} className={styles.colRight}>
            <CardFee />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const handlerStep = ({ bookingTree }: any) => {
  console.log('bookingTree :>> ', bookingTree)

  if (!bookingTree) return []

  const pathStep = bookingTree?.path?.split('_') || [] // phân giải path của booking
  pathStep.push('time') // thêm time vào mãng trên
  const addSortStep = steps.map((v) => {
    const findIndex = indexOf(pathStep, v.key) // tìm ra vị trí của step
    return { ...v, sort: findIndex } // add vị trí tìm được vào phần tử
  })
  const sortByStep = addSortStep.sort((a, b) => a.sort - b.sort) // sắp xếp dựa trên sort phía trên

  sortByStep[0].data = bookingTree.child // mặc định add dữ liệu đầu tiên vào step đầu tiên

  return sortByStep
}
