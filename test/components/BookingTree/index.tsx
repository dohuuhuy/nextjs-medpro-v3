import { Col, Collapse, Row, Space } from 'antd'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import styles from './less/styles.module.less'
import { Stepper } from './stepper'
import { colLeft, colRight, handlerStep, Steps } from './utils'

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

  useEffect(() => {
    setstate({ stepper: handlerStep({ bookingTree }) })
  }, [bookingTree])

  if (!bookingTree) return null
  console.log('state :>> ', state)
  return (
    <section>
      <Stepper data={state.stepper} />
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
                        style={{ width: '100%' }}
                        className={cx(styles.content)}
                        header={
                          <div className={styles.header}>
                            <h3>{v.title}</h3>
                            <div className={cx(styles.input)}>
                              {v.icon({
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
                        disabled={v.open}
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
