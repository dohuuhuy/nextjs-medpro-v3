import { Icon } from '@componentsTest/Icon'
import Loading from '@componentsTest/Loading'
import { Col, Collapse, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CardFee } from '../CardFee'
import Container from '../Container'
import Banner from './common/images/BgPayment.svg'
import { PaymentMedthodIF } from './common/interface'
import { CardPaymentFee } from './common/listPartnerPayment'
import styles from './styles.module.less'

export const PaymentMethods = (props: PaymentMedthodIF) => {
  const { listPayment } = props.hospital
  const dispatch = useDispatch()

  console.log('listPayment :>> ', listPayment)

  const [state, setstate] = useState({
    currentCollapse: {
      key: 0
    }
  })

  const onChange = (key: any) => {
    setstate((prev) => ({
      ...prev,
      currentCollapse: {
        key: key
      }
    }))
    if (listPayment[key]?.paymentTypes.length < 2) {
      dispatch(props.onSelectedPaymentFee(listPayment[key]?.paymentTypes[0]))
    }
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
            activeKey={state.currentCollapse.key}
            className={styles.listPayment}
            expandIconPosition='right'
            accordion={true}
            onChange={onChange}
            bordered={false}
          >
            {listPayment.length < 1 ? (
              <Loading
                component
                typing={false}
                minHeight='600px'
                text='Đang tải phướng thúc thanh toán ! ...'
              />
            ) : (
              listPayment?.map((item, i) => {
                return (
                  <Collapse.Panel
                    className={styles.panel}
                    header={Header(item)}
                    key={i}
                  >
                    <CardPaymentFee list={item.paymentTypes} {...props} />
                  </Collapse.Panel>
                )
              })
            )}
          </Collapse>
        </Col>

        <Col xl={8} lg={8} md={24}>
          <CardFee hospital={props.hospital} />
        </Col>
      </Row>
    </Container>
  )
}
