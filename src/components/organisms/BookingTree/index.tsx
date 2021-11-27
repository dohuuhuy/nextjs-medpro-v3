import * as ac from '@actionStore/rootAction'
import { CardFee } from '@componentsTest/CardFee'
import Container from '@componentsTest/Container'
import { Col, Collapse, Row, Space } from 'antd'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Stepper } from './common/stepper'
import { colLeft, colRight, handlerStep, Steps } from './common/utils'
import styles from './less/styles.module.less'

export interface BookingTreeIF {
  bookingTree: any
}

export interface State {
  stepper: Steps[]
}

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const dispatch = useDispatch()

  const [state, setstate] = useState<any>({
    stepper: handlerStep({ bookingTree })
  })

  useEffect(() => {
    setstate({ stepper: handlerStep({ bookingTree }) })
  }, [bookingTree])

  if (!bookingTree) return null

  return (
    <section>
      <Stepper data={state} />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <Space direction='vertical' className={styles.listTree}>
              {state?.stepper?.map((v: Steps, i: any) => {
                return (
                  v.sort >= 0 && (
                    <Collapse
                      key={i}
                      className={styles.card}
                      expandIconPosition='right'
                      bordered={false}
                      collapsible={v.open ? 'disabled' : 'header'}
                    >
                      <Collapse.Panel
                        style={{ width: '100%' }}
                        className={cx(styles.content)}
                        header={
                          <div className={styles.header}>
                            <h3>{v.title}</h3>
                            <div className={cx(styles.input)}>
                              {v?.icon({
                                item: v.selected,
                                props: {
                                  keys: v.key,
                                  state
                                }
                              })}
                              <span
                                className={v.selected.name && styles.active}
                              >
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
                          data: v.data,
                          saveInfoStep: ac.saveInfoStep,
                          saveSchedule: ac.saveSchedule,
                          getBookingTreeCurrent: ac.getBookingTreeCurrent,
                          dispatch
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
