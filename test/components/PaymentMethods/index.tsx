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
import { handleHeader } from './common/utils'
import styles from './styles.module.less'

export const PaymentMethods = (props: PaymentMedthodIF) => {
  const { listPayment, selectedPaymentFee } = props.hospital
  const dispatch = useDispatch()

  const [state, setstate] = useState({
    currentCollapse: {
      key: -1
    }
  })

  React.useEffect(() => {
    const key = selectedPaymentFee.keyCollapse || 0
    setstate((prev) => ({
      ...prev,
      currentCollapse: {
        key
      }
    }))

    if (listPayment[key]?.paymentTypes.length < 2) {
      dispatch(props.onSelectedPaymentFee(listPayment[key]?.paymentTypes[0]))
    }
  }, [])

  const onChange = (key: any) => {
    setstate((prev) => ({
      ...prev,
      currentCollapse: {
        key
      }
    }))
    if (listPayment[key]?.paymentTypes.length < 2) {
      ;(listPayment[key]?.paymentTypes[0]).keyCollapse = key

      dispatch(props.onSelectedPaymentFee(listPayment[key]?.paymentTypes[0]))
    }
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
                component={true}
                typing={false}
                minHeight='600px'
                text='Đang tải phướng thúc thanh toán ! ...'
              />
            ) : (
              listPayment?.map((item, i) => {
                return (
                  <Collapse.Panel
                    className={styles.panel}
                    header={handleHeader(item)}
                    key={i}
                  >
                    <CardPaymentFee list={item.paymentTypes} {...props} />
                  </Collapse.Panel>
                )
              })
            )}
          </Collapse>
        </Col>

        <Col xl={8} lg={8} md={24} xs={24}>
          <CardFee
            hospital={props.hospital}
            onReserveBooking={props.onReserveBooking}
            willPayment={true}
            selectedPatient={props.selectedPatient}
            onRePayment={props.onRePayment}
          />
        </Col>
      </Row>
    </Container>
  )
}
