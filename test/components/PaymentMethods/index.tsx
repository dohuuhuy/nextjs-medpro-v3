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
            {props.listPayment.map((item, i) => {
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

        <Col xl={8}>
          <CardFee
            paymentFee={props.paymentFee}
            selectedPaymentFee={props.selectedPaymentFee}
          />
        </Col>
      </Row>
    </Container>
  )
}

export const X = {
  partnerId: 'dkanphuoc',
  name: 'Thanh toán bằng Thẻ quốc tế Visa, Master, JCB',
  methodId: 'visa',
  paymentTypes: [
    {
      name: 'Thẻ quốc tế Visa',
      code: 'VISA',
      paymentIcon: {
        path: 'https://api-v2.medpro.com.vn:5000/st/bank/visa_logo.png',
        width: '',
        height: ''
      },
      gatewayId: 'alepay',
      paymentPartnerId: 'alepay',
      templateId: '',
      rate: 0,
      constRate: 0,
      rateMedproFee: 0,
      constRateMedproFee: 0,
      medproFee: 10000,
      minFee: 0,
      maxFee: 0,
      status: 1,
      sequence: 1,
      subTotal: 80000,
      totalFee: 10000,
      grandTotal: 90000,
      type: 'creditcard',
      highlight: false,
      imageURL: '',
      bannerURL: '',
      description: '',
      feeServiceCode: '',
      separateMedproFeeAtGateway: false,
      separateFeeMedproFeeAtGateway: false,
      payMedproFeeAtHospital: false
    },
    {
      name: 'Thẻ quốc tế MasterCard',
      code: 'MASTER',
      paymentIcon: {
        path: 'https://api-v2.medpro.com.vn:5000/st/bank/mastercard_logo.png',
        width: '',
        height: ''
      },
      gatewayId: 'alepay',
      paymentPartnerId: 'alepay',
      templateId: '',
      rate: 0,
      constRate: 0,
      rateMedproFee: 0,
      constRateMedproFee: 0,
      medproFee: 10000,
      minFee: 0,
      maxFee: 0,
      status: 1,
      sequence: 2,
      subTotal: 80000,
      totalFee: 10000,
      grandTotal: 90000,
      type: 'creditcard',
      highlight: false,
      imageURL: '',
      bannerURL: '',
      description: '',
      feeServiceCode: '',
      separateMedproFeeAtGateway: false,
      separateFeeMedproFeeAtGateway: false,
      payMedproFeeAtHospital: false
    },
    {
      name: 'Thẻ quốc tế JCB',
      code: 'JCB',
      paymentIcon: {
        path: 'https://api-v2.medpro.com.vn:5000/st/bank/jcb_logo.png',
        width: '',
        height: ''
      },
      gatewayId: 'alepay',
      paymentPartnerId: 'alepay',
      templateId: '',
      rate: 0,
      constRate: 0,
      rateMedproFee: 0,
      constRateMedproFee: 0,
      medproFee: 10000,
      minFee: 0,
      maxFee: 0,
      status: 1,
      sequence: 3,
      subTotal: 80000,
      totalFee: 10000,
      grandTotal: 90000,
      type: 'creditcard',
      highlight: false,
      imageURL: '',
      bannerURL: '',
      description: '',
      feeServiceCode: '',
      separateMedproFeeAtGateway: false,
      separateFeeMedproFeeAtGateway: false,
      payMedproFeeAtHospital: false
    }
  ],
  rate: 0,
  constRate: 0,
  rateMedproFee: 0,
  constRateMedproFee: 0,
  medproFee: 10000,
  status: 1,
  payMedproFeeAtHospital: false,
  sequence: 2,
  subTotal: 80000,
  totalFee: 10000,
  grandTotal: 90000,
  groupId: '1',
  minAmount: 0,
  maxAmount: 0,
  highlight: false,
  imageURL: '',
  appIds: '',
  platforms: '',
  bannerURL: '',
  description: ''
}
