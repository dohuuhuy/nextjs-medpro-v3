import Container from '@componentsTest/Container'
import { Col, Row, Tooltip } from 'antd'
import React from 'react'
import styles from './../less/stepper.module.less'
import { StateBooking } from './interface'
import { checkActive, steps } from './utils'

export interface StepsIF {
  data: StateBooking
  setstate: React.Dispatch<React.SetStateAction<StateBooking>>
}

export const Stepper = ({ data, setstate }: StepsIF) => {
  const onClickStep = (i: number) => () => {
    const curStep = data.stepper[i]
    setstate((prev) => ({
      ...prev,
      stepCurrent: {
        name: curStep.title,
        index: curStep.sort + 1,
        key: i
      }
    }))
  }

  return (
    <Container fluid={true} className={styles.wrapper}>
      <Container className={styles.steps}>
        <Row className={styles.rowStep}>
          <Col span='24' className={styles.colStep}>
            <h2 className={styles.titleStep}>
              {`Bước ${data?.stepCurrent?.index}: Chọn ${data?.stepCurrent?.name}`}
            </h2>

            <ul className={styles.listStep}>
              {data.stepper?.map((v, i) => {
                const w = (1 / steps.length) * 100
                const active = checkActive(v.selected, {
                  keys: v.key,
                  state: data
                })
                  ? styles.active
                  : ''
                return (
                  <li
                    key={i}
                    style={{ width: w + '%' }}
                    className={active}
                    onClick={onClickStep(i)}
                  >
                    <Tooltip title={v.title} color={'#2db7f5'}>
                      <button className={styles.btnIcon}>{v.icon()}</button>
                    </Tooltip>
                    <hr className={styles.hrAf} />
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
