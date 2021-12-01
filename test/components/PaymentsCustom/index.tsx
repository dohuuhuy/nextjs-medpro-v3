import React, { useState } from 'react'
import { Row, Col, Space, Radio, Tooltip } from 'antd'
import styles from './styles.module.less'
import { LineChartOutlined, MoneyCollectFilled } from '@ant-design/icons'
import Container from '@componentsTest/Container'

export const HinhThucThanhToan = () => {
  const [values, setValues] = useState(0)

  const onChange = (e: any) => {
    setValues(e.target.value)
  }
  return (
    <Container>
      <Row className={styles.rowPayments}>
        <Col xs={24} sm={24} lg={12} xl={12} className={styles.colPayments}>
          <h3>Phương thức thanh toán</h3>
          <div className={styles.cardView}>
            <Radio.Group onChange={onChange}>
              <Space direction='vertical'>
                <Radio value={1}>
                  <Tooltip title='Nhờ người thân hoặc bạn bè thanh toán hộ phí khám'>
                    Thanh toán hộ
                  </Tooltip>
                </Radio>
                <Radio value={2}>Thẻ quốc tế Visa Master, JCB</Radio>
                <Radio value={3}>Thẻ ATM nội địa / Internet Banking</Radio>
                <Radio value={4}>
                  Ví điện tử
                  <Space style={{ display: 'block' }}>
                    <Radio.Group
                      defaultValue={1}
                      className={values === 4 ? styles.wallet : styles.hidden}
                    >
                      <Radio value={1}>MoMo</Radio>
                      <Radio value={2}>Zalo Pay</Radio>
                    </Radio.Group>
                  </Space>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </Col>

        <Col xs={24} sm={24} lg={12} xl={12} className={styles.colBill}>
          <h3>Thông tin thanh toán</h3>
          <div className={styles.cardView}>
            <ul className={styles.listBill}>
              <li>
                <div className={styles.itemService}>
                  <p className={styles.itemKeys}>
                    {<LineChartOutlined />} Dịch vụ
                  </p>
                  <p className={styles.itemValues}>KHÁM DỊCH VỤ</p>
                </div>
              </li>
              <li>
                <div className={styles.itemMoney}>
                  <p className={styles.itemKeys}>
                    {<MoneyCollectFilled />} Tiền khám
                  </p>
                  <p className={styles.itemValues}>150,000 VNĐ</p>
                </div>
              </li>
            </ul>
            <ul className={styles.listPayment}>
              <li>
                <div className={styles.itemSum}>
                  <p>Tổng tiền khám: </p>
                  <span>150.000 VNĐ</span>
                </div>
              </li>
              <li>
                <div className={styles.itemFee}>
                  <p>Phí tiện ích: </p>
                  <span>0 VNĐ</span>
                </div>
              </li>
              <li>
                <div className={styles.br} />
              </li>
              <li>
                <div className={styles.itemTotal}>
                  <p>Tổng cộng: </p>
                  <span>150.000 VNĐ</span>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
