import * as ac from '@actionStore'
import { saveSchedule } from '@actionStore'
import { CardFee } from '@componentsTest/CardFee'
import Container from '@componentsTest/Container'
import { Col, Collapse, Row, Space } from 'antd'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Stepper } from './common/stepper'
import { colLeft, colRight, handlerStep, Steps } from './common/utils'
import styles from './less/styles.module.less'

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const dispatch = useDispatch()

  const [state, setstate] = useState<any>({
    stepper: handlerStep({ bookingTree })
  })

  useEffect(() => {
    const { type, TYPE_RELOAD } = (performance as any).navigation

    if (window.performance) {
      console.info('window.performance works fine on this browser')
      setstate({ stepper: handlerStep({ bookingTree }) })
    }
    if (type === TYPE_RELOAD) {
      console.info('This page is reloaded')
      const data = window.localStorage.getItem('selected')
      if (data) {
        const selecteds = JSON.parse(data || '')
        dispatch(saveSchedule(selecteds))

        const stepper = state.stepper.map((v: any) => {
          return {
            ...v,
            selected: selecteds[v.key].selected,
            data: selecteds[v.key].data,
            open: Object.keys(selecteds[v.key]).length ? false : true
          }
        })

        setstate({ stepper: stepper })
      } else {
        setstate({ stepper: handlerStep({ bookingTree }) })
      }
    } else {
      console.info('This page is not reloaded')
    }
  }, [bookingTree])

  if (!bookingTree) return null

  console.log('state :>> ', state)
  return (
    <section>
      <Stepper data={state} />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <Space direction='vertical' className={styles.listTree}>
              {state?.stepper?.map((v: Steps, i: any) => {
                // return null
                const icon = v?.icon({
                  item: v.selected,
                  props: {
                    keys: v.key,
                    state
                  }
                })

                const name =
                  v?.selected?.name || 'Chọn ' + v?.title.toLowerCase()

                const content = v?.content({
                  keys: v.key,
                  state,
                  setstate,
                  data: v.data,
                  saveSchedule: ac.saveSchedule,
                  dispatch
                })

                return (
                  v?.sort >= 0 && (
                    <Collapse
                      key={i}
                      className={styles.card}
                      expandIconPosition='right'
                      bordered={false}
                      // collapsible={v.open ? 'disabled' : 'header'}
                    >
                      <Collapse.Panel
                        style={{ width: '100%' }}
                        className={cx(styles.content)}
                        header={
                          <div className={styles.header}>
                            <h3>{v.title}</h3>
                            <div className={cx(styles.input)}>
                              {icon}
                              <span
                                className={v.selected.name && styles.active}
                              >
                                {name}
                              </span>
                            </div>
                          </div>
                        }
                        key={i}
                      >
                        {content}
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

export interface BookingTreeIF {
  bookingTree: any
}

export interface State {
  stepper: Steps[]
}
