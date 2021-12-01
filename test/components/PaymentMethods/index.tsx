import Container from '@componentsTest/Container'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { CardFee } from '../CardFee'
import { Col, Row, Collapse, Button } from 'antd'
import { Icon } from '@componentsTest/Icon'
import Image from 'next/image'
import Banner from './images/BgPayment.svg'
import { data } from './utils/data'
import { PartnerPayment } from './components/listPartnerPayment'
// import cx from 'classnames'

const { Panel } = Collapse
export const PaymentMethods = () => {
  const [idKey, setIDKey] = useState({
    collapseID: ' '
  })
  const onChange = (key: any) => {
    setIDKey((prevState) => ({
      ...prevState,
      collapseID: key
    }))
  }
  const Header = (id: any, title: string, subtitle: string, icon: any) => {
    return (
      <div className={styles.Header}>
        <figure
          className={
            idKey.collapseID === id ? styles.icons_select : styles.icons
          }
        >
          {icon}
        </figure>
        <p>
          <span
            className={
              subtitle
                ? idKey.collapseID === id
                  ? styles.title_select
                  : styles.title
                : styles.title_alone
            }
          >
            {title}
          </span>
          <span className={styles.subtitle}>{subtitle}</span>
        </p>
      </div>
    )
  }
  return (
    <Container>
      <Row className={styles.rowMethods}>
        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
        <Col xl={16} className={styles.colMethods}>
          <figure className={styles.Banner}>
            <Image src={Banner} width={720} height={291} alt='' />
          </figure>
          <div className={styles.Call}>
            <figure className={styles.icons}>
              <Icon name='Goitongdai' size='32' />
            </figure>
            <p className={styles.title}>Thanh toán qua tổng đài</p>
            <Button type='primary'>Nhấn để gọi</Button>
          </div>
          <div className={styles.MedicalCard}>
            <figure className={styles.icons}>
              <Icon name='ViDienTu' size='32' />
            </figure>
            <p className={styles.title}>Thẻ khám bệnh</p>
          </div>
          <ul className={styles.listPayment}>
            {data.map(({ id, title, subtitle, icon }: any) => {
              return (
                <li key={id}>
                  <Collapse
                    className={styles.cardPayment}
                    expandIconPosition='right'
                    accordion
                    onChange={onChange}
                  >
                    <Panel
                      className={styles.panel}
                      header={Header(id, title, subtitle, icon)}
                      key={id}
                    >
                      <PartnerPayment />
                    </Panel>
                  </Collapse>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col xl={8}>
          <CardFee />
        </Col>
      </Row>
    </Container>
  )
}
