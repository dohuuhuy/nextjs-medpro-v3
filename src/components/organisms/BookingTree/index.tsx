import { getbookingCur, saveSchedule } from '@actionStore'
import { CardFee } from '@componentsTest/CardFee'
import Container from '@componentsTest/Container'
import { AppState } from '@src/store/interface'
import { Col, Collapse, Row } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import 'moment/locale/vi'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingTreeIF, StateBooking } from './common/interface'
import { Stepper } from './common/stepper'
import { colLeft, colRight, handlerStep } from './common/utils'
import styles from './less/styles.module.less'

const Panel = Collapse.Panel

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const dispatch = useDispatch()

  const hospital = useSelector((state: AppState) => state.hospital)

  const [state, setstate] = useState<StateBooking>({
    stepper: handlerStep({ bookingTree }),
    schedules: {},
    cKey: 0
  })

  console.log('state :>> ', state)

  const handleGetDataLocal = () => {
    const data = window.localStorage.getItem('selected')

    if (data) {
      const selecteds = JSON.parse(data || '')
      dispatch(saveSchedule(selecteds))

      const stepper = state.stepper.map((v: any) => {
        return {
          ...v,
          selected: selecteds[v.key].selected,
          data: selecteds[v.key].data
        }
      })

      setstate((v) => ({ ...v, stepper: stepper, schedules: selecteds }))
    } else {
      setstate((v) => ({ ...v, stepper: handlerStep({ bookingTree }) }))
    }
  }

  useEffect(() => {
    const { type, TYPE_RELOAD } = (performance as any).navigation

    if (window.performance) {
      console.info('window.performance works fine on this browser')
      setstate((v) => ({ ...v, stepper: handlerStep({ bookingTree }) }))
    }
    if (type === TYPE_RELOAD) {
      console.info('This page is reloaded')
      handleGetDataLocal()
    } else {
      console.info('This page is not reloaded')
      handleGetDataLocal()
    }
  }, [bookingTree])

  if (!bookingTree) return null

  // console.log('state :>> ', state.stepper)

  return (
    <section>
      <Stepper data={state} setstate={setstate} />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <div className={styles.listTree}>
              <Collapse
                expandIconPosition='right'
                bordered={false}
                accordion
                activeKey={state.cKey}
              >
                {state?.stepper?.map((v, index) => {
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
                    saveSchedule,
                    dispatch
                  })

                  return (
                    <Panel
                      // disabled={v.open}
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
                      key={Number(index)}
                      className={styles.card}
                    >
                      {content}
                    </Panel>
                  )
                })}
              </Collapse>
            </div>
          </Col>
          <Col {...colRight} className={styles.colRight}>
            <CardFee hospital={hospital} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
