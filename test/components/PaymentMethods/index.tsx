import { Col, Collapse, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import { Data } from './common/interface'
import { PartnerPayment } from './common/listPartnerPayment'
import { data } from './common/utils/data'
import Banner from './common/images/BgPayment.svg'
import styles from './styles.module.less'
// import cx from 'classnames'

export const PaymentMethods = () => {
  const [_idKey, setIDKey] = useState({
    collapseID: ' '
  })
  const onChange = (key: any) => {
    setIDKey((prevState) => ({
      ...prevState,
      collapseID: key
    }))
  }
  const Header = (item: Data) => {
    return (
      <div className={styles.headerCollaps}>
        <figure className={styles.viewIcon}>{item.icon}</figure>
        <div className={styles.contenTitle}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.subtitle}>{item.subtitle}</span>
        </div>
      </div>
    )
  }
  return (
    <Container tag={'section'} className={styles.PaymentMethods}>
      <Row className={styles.rowMethods}>
        <Col span={24} className={styles.colTitle}>
          <h3 className={styles.titlePayment}>PHƯƠNG THỨC THANH TOÁN</h3>
        </Col>
        <Col xl={16} className={styles.colMethods}>
          <figure className={styles.bannerMethods}>
            <Image
              src={Banner}
              width={720}
              height={290}
              alt=''
              loading='eager'
              property='true'
            />
          </figure>

          <Collapse
            className={styles.listPayment}
            expandIconPosition='right'
            accordion
            onChange={onChange}
            bordered={false}
          >
            {data.map((item, i) => {
              return (
                <Collapse.Panel
                  className={styles.panel}
                  header={Header(item)}
                  key={i}
                >
                  <PartnerPayment />
                </Collapse.Panel>
              )
            })}
          </Collapse>
        </Col>

        <Col xl={8}>
          <CardFee />
        </Col>
      </Row>
    </Container>
  )
}
