import { getbookingCur, saveSchedule } from '@actionStore'
import { CardFee } from '@componentsTest/CardFee'
import Container from '@componentsTest/Container'
import { Col, Collapse, Row, Space } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import 'moment/locale/vi'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BookingTreeIF, StateBooking } from './common/interface'
import { Stepper } from './common/stepper'
import { colLeft, colRight, handlerStep } from './common/utils'
import styles from './less/styles.module.less'

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const dispatch = useDispatch()

  const [state, setstate] = useState<StateBooking>({
    stepper: handlerStep({ bookingTree }),
    schedules: {}
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

        setstate({ stepper: stepper, schedules: selecteds })
      } else {
        setstate({ stepper: handlerStep({ bookingTree }) })
      }
    } else {
      console.info('This page is not reloaded')
    }

    return () => {
      // window.localStorage.removeItem('selected')
      setstate({
        stepper: [],
        schedules: {}
      })
    }
  }, [bookingTree])

  if (!bookingTree) return null

  console.log('state :>> ', state.stepper)

  return (
    <section>
      <Stepper data={state} />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <Space direction='vertical' className={styles.listTree}>
              {state?.stepper?.map((v, i) => {
                // return null
                const icon = v?.icon({
                  item: v.selected,
                  props: {
                    keys: v.key,
                    state
                  }
                })

                const name = () => {
                  if (v.key === 'time') {
                    if (Object.keys(v.selected).length > 1) {
                      const ngay = moment(v.selected?.chonNgay?.date)
                        .locale('vi')
                        .format('dddd, DD MMMM YYYY')
                      const { startTime, endTime }: any = v.selected.chonGio
                      return `${ngay}, từ ${startTime} đến ${endTime} `
                    }
                  } else {
                    if (v?.selected?.name) {
                      return v?.selected?.name
                    }
                  }
                  return 'Chọn ' + v?.title.toLowerCase()
                }

                const content = v?.content({
                  keys: v.key,
                  state,
                  data: v.data,
                  setstate,
                  getbookingCur: getbookingCur,
                  dispatch
                })

                return (
                  v?.sort >= 0 && (
                    <Collapse
                      key={v.key}
                      className={styles.card}
                      expandIconPosition='right'
                      bordered={false}
                      accordion={v.open}
                    >
                      <Collapse.Panel
                        key={i}
                        style={{ width: '100%' }}
                        className={cx(styles.content)}
                        header={
                          <div className={styles.header}>
                            <h3>{v.title}</h3>
                            <div className={cx(styles.input)}>
                              {icon}
                              <span
                                className={
                                  Object.keys(v.selected).length
                                    ? styles.active
                                    : ''
                                }
                              >
                                {name()}
                              </span>
                            </div>
                          </div>
                        }
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
