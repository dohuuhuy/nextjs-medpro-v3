import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import Container from '../Container'
import { Icon } from '../Icon'
import styles from './styles.module.less'

export interface BookingTreeIF {
  [T: string]: any
}

export const BookingTree = () => {
  const [id, setid] = React.useState(0)

  const [toggle, settoggle] = React.useState(false)

  const clickStep = (e: any) => {
    const i = e.target.dataset.id
    setid(i)
  }

  const checkStep = (e: number) => {}

  return (
    <section>
      <Container fluid className={styles.wrapper}>
        <Container className={styles.steps}>
          <Row className={styles.rowStep}>
            <Col span='24' className={styles.colStep}>
              <h2>Bước 1: Chọn chuyên khoa</h2>

              <ul className={styles.listStep}>
                {steps.map((e, i) => {
                  return (
                    <li key={i}>
                      <button className={styles.btnIcon}>{e.icon}</button>
                      <hr />
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
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
                        {e.content}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xl='8' lg='8' span='8' className={styles.colRight}>
            <div className={styles.cardFee}>
              <p className={styles.luuy}>
                <Icon name='luuy' /> Vui lòng kiểm tra lại thông tin trước khi
                đặt lịch
              </p>
              <ul className={styles.listFee}>
                <li>
                  <span className={styles.label}>Phí khám bệnh</span>
                  <span className={styles.value}>0 VND</span>
                </li>
                <li>
                  <span className={styles.label}>Phí tiện ích</span>
                  <span className={styles.value}>0 VND</span>
                </li>
                <li>
                  <span className={styles.label}>Tổng tiền</span>
                  <span className={styles.value}>0 VND</span>
                </li>
              </ul>
              <div className={styles.groupBtn}>
                <button className={cx(styles.btn, styles.again)}>Trở về</button>
                <button className={cx(styles.btn, styles.next)}>
                  Tiếp tục
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const steps: Steps[] = [
  {
    title: 'Chuyên khoa',
    icon: <Icon name='chuyenkhoa' />,
    content: 'hello cưng'
  },
  {
    title: 'Bác sĩ',
    icon: <Icon name='bacsi' />,
    content: 'd dvd d'
  },
  {
    title: 'Dịch vụ',
    icon: <Icon name='dichvu' />,
    content: 'dv ddddddddddđ'
  },
  {
    title: 'Ngày giờ',
    icon: <Icon name='ngaygio' />,
    content: 'dv hhhhhhuyi'
  }
]

interface Steps {
  title: string
  icon: JSX.Element
  content: string
}
