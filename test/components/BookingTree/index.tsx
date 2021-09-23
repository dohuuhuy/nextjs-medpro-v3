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

  const [toggle, settoggle] = React.useState(false)

  const clickStep = (e: any) => {
    const i = e.target.dataset.id
    setid(i)
    settoggle(!toggle)
  }

  const checkStep = (e: any) => {
    return Number(e) === Number(id) ? '' : styles.dnone
  }

  return (
    <section>
      <Stepper />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col xl='16' lg='16' span='16' className={styles.colLeft}>
            <ul className={styles.listTree}>
              {steps.map((e, i) => {
                // const active = act === i ? styles.active : ''
                return (
                  <li key={i}>
                    <div className={styles.card}>
                      <h3 data-id={i} onClick={clickStep}>
                        {e.title} <Icon name='arrowDown' size='15' />
                      </h3>
                      <div className={styles.input}>
                        {e.icon}
                        <input placeholder={'Chọn ' + e.title.toLowerCase()} />
                      </div>

                      <div className={cx(styles.content, checkStep(i))}>
                        {e?.content}
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
