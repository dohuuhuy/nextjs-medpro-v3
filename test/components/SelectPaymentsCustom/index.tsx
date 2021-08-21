import React from 'react'
import { Row, Col, Space, Button, Radio, Tooltip } from 'antd'
import styles from './styles.module.less'
import { LineChartOutlined, MoneyCollectFilled } from '@ant-design/icons'

export const HinhThucThanhToan = () => {
  // const onChange = (e) => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };
  return (
    <div className={styles.Container}>
      <Row className={styles.rowPayments}>
        <Col xl={12} className={styles.colBill}>
          <div className={styles.PhuongThucThanhToan}>
            <h3>Phương thức thanh toán</h3>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>
                  <Tooltip title="Nhờ người thân hoặc bạn bè thanh toán hộ phí khám">
                    Thanh toán hộ
                  </Tooltip>
                </Radio>
                <Radio value={2}>Thẻ quốc tế Visa Master, JCB</Radio>
                <Radio value={3}>Thẻ ATM nội địa / Internet Banking</Radio>
                <Radio value={4}>
                  Ví điện tử
                  <Space style={{ display: 'block' }}>
                    <Radio.Group>
                      <Radio value={1}>
                        MoMo
                      </Radio>
                      <Radio value={2}>
                        Zalo Pay
                      </Radio>
                    </Radio.Group>
                  </Space>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </Col>
        <Col xl={12} className={styles.colPayments}>
          <div className={styles.ThongTinThanhToan}>
            <h3>Thông tin thanh toán</h3>
            <ul className={styles.listBill}>
              <li>
                <div className={styles.itemService}>
                  <Space>
                    <Space className={styles.itemKeys}>
                      <p>{<LineChartOutlined />}</p> {<p>Dịch vụ</p>}
                    </Space>
                    <p className={styles.itemValues}>KHÁM DỊCH VỤ 150,000Đ</p>
                  </Space>
                </div>
              </li>
              <li>
                <div className={styles.itemMoney}>
                  <Space>
                    <Space className={styles.itemKeys}>
                      <p>{<MoneyCollectFilled />}</p> {<p>Tiền khám</p>}
                    </Space>
                    <p className={styles.itemValues}>150,000Đ</p>
                  </Space>
                </div>
              </li>
            </ul>
            <ul className={styles.listPayment}>
              <li>
                <div className={styles.itemSum}>
                  <p>Tổng tiền khám: </p>
                  <strong>150.000 VNĐ</strong>
                </div>
              </li>
              <li>
                <div className={styles.itemFee}>
                  <p>Phí tiện ích: </p>
                  <strong>150.000 VNĐ</strong>
                </div>
              </li>
              <li>
                <div className={styles.itemTotal}>
                  <p>Tổng cộng: </p>
                  <strong>150.000 VNĐ</strong>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}
