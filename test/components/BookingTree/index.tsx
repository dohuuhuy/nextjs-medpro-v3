import { CardFee } from '../CardFee'
import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import Container from '../Container'
import { Icon } from '../Icon'
import { Stepper } from './stepper'
import styles from './less/styles.module.less'
import { steps } from './utils'

export interface BookingTreeIF {
  [T: string]: any
}

export const BookingTree = () => {
  const [id, setid] = React.useState(0)
  const [toggle, settoggle] = React.useState(true)

  const clickStep = (i: any) => {
    if (i !== id) {
      setid(i)
      settoggle(false)
    } else {
      if (toggle) {
        setid(i)
        settoggle(false)
      } else {
        setid(-1)
        settoggle(true)
      }
    }
  }

  const checkOut = (i: any) => {
    return Number(i) === Number(id) ? styles.out : styles.in
  }

  return (
    <section>
      <Stepper />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col xl='16' lg='16' span='16' className={styles.colLeft}>
            <ul className={styles.listTree}>
              {steps.map((v, i) => {
                return (
                  <li key={i}>
                    <div className={styles.card}>
                      <h3 onClick={() => clickStep(i)}>
                        {v.title} <Icon name='arrowDown' size='15' />
                      </h3>

                      <div
                        className={cx(
                          styles.input,
                          i === id ? styles.dnone : ''
                        )}
                        onClick={() => clickStep(i)}
                      >
                        {v.icon}
                        <span>{'Chọn ' + v.title.toLowerCase()}</span>
                      </div>

                      <div className={cx(styles.content, checkOut(i))}>
                        {v?.content}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xl='8' lg='8' span='8' className={styles.colRight}>
            <CardFee />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
