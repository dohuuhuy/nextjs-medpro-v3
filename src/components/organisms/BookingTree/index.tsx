import { getbookingCur, saveSchedule } from '@actionStore'
import { CardFee } from '@componentsTest/CardFee'
import Container from '@componentsTest/Container'
import { AppState } from '@src/store/interface'
import { Col, Collapse, Row } from 'antd'
import 'moment/locale/vi'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingTreeIF, StateBooking } from './common/interface'
import { Stepper } from './common/stepper'
import { handleHeader, handlerStep, onChangeCollapse } from './common/utils'
import styles from './less/styles.module.less'

const Panel = Collapse.Panel

export default function BookingTree({ bookingTree }: BookingTreeIF) {
  const dispatch = useDispatch()

  const hospital = useSelector((state: AppState) => state.hospital)

  const [state, setstate] = useState<StateBooking>({
    stepper: handlerStep({ bookingTree }),
    schedules: {},
    stepCurrent: {
      key: 0,
      name: handlerStep({ bookingTree })[0].title,
      index: handlerStep({ bookingTree })[0].sort + 1
    }
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
          selected: selecteds[v.key]?.selected,
          data: selecteds[v.key]?.data,
          other: selecteds[v.key]?.other
        }
      })

      setstate((v) => ({ ...v, stepper, schedules: selecteds }))
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

    return () => {
      ;(setstate as any)(null)
    }
  }, [bookingTree])

  if (!bookingTree) return null

  return (
    <section>
      <Stepper data={state} setstate={setstate} />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col xl={16} lg={16} md={24} className={styles.colLeft}>
            <div className={styles.listTree}>
              <Collapse
                onChange={(key) => onChangeCollapse(key, state, setstate)}
                ghost={true}
                expandIconPosition='right'
                bordered={false}
                accordion={true}
                activeKey={state.stepCurrent?.key || 0}
              >
                {state?.stepper?.map((item, index) => {
                  const content = item?.content({
                    keys: item.key,
                    state,
                    data: item.data,
                    setstate,
                    getbookingCur,
                    saveSchedule,
                    dispatch
                  })

                  return (
                    <Panel
                      header={handleHeader({ item, state })}
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
          <Col className={styles.colRight} xl={8} lg={8} md={24}>
            <CardFee hospital={hospital} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
