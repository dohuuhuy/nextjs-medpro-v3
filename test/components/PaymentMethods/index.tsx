import { Col, Collapse, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import { PaymentMedthodIF } from './common/interface'
import { PartnerPayment } from './common/listPartnerPayment'
import Banner from './common/images/BgPayment.svg'
import styles from './styles.module.less'
import { Icon } from '@componentsTest/Icon'
// import cx from 'classnames'

export const PaymentMethods = (props: PaymentMedthodIF) => {
  const [_idKey, setIDKey] = useState({
    collapseID: ' '
  })
  const onChange = (key: any) => {
    setIDKey((prevState) => ({
      ...prevState,
      collapseID: key
    }))
  }
  const Header = (item: any) => {
    return (
      <div className={styles.headerCollaps}>
        <figure className={styles.viewIcon}>
          <Icon name='TheATM' size='30' />
        </figure>
        <div className={styles.contenTitle}>
          <span className={styles.title}>{item.name}</span>
          <span className={styles.subtitle}>{item.subtitle}</span>
        </div>
      </div>
    )
  }

  const { listPayment } = props.hospital

  return (
    <Container tag={'section'} className={styles.PaymentMethods}>
      <Row className={styles.rowMethods}>
        <Col span={24} className={styles.colTitle}>
          <h3 className={styles.titlePayment}>PHƯƠNG THỨC THANH TOÁN</h3>
        </Col>
        <Col xl={16} lg={16} md={24} className={styles.colMethods}>
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
            ghost={true}
            className={styles.listPayment}
            expandIconPosition='right'
            accordion={true}
            onChange={onChange}
            bordered={false}
          >
            {listPayment.map((item, i) => {
              return (
                <Collapse.Panel
                  className={styles.panel}
                  header={Header(item)}
                  key={i}
                >
                  <PartnerPayment list={item.paymentTypes} {...props} />
                </Collapse.Panel>
              )
            })}
          </Collapse>
        </Col>

        <Col xl={8} lg={8} md={24}>
          <CardFee hospital={props.hospital} />
        </Col>
      </Row>
    </Container>
  )
}
