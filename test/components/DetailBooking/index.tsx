import Container from '@componentsTest/Container'
import { Button, Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'
import Barcode from 'react-barcode'
import { uniqueId } from 'lodash'
import { CloseOutlined } from '@ant-design/icons'

export const DetailBooking = () => {
  const data = [
    {
      title: 'Hình thức khám:',
      value: 'Dịch vụ',
    },
    {
      title: "Phòng khám",
      value: "P.Khám Da Liễu"
    },
    {
      title: 'Chuyên khoa:',
      value: "Da Liễu",
    },
    {
      title: 'Bác sĩ:',
      value: "Nguyễn Văn A",
    },
    {
      title: "Ngày khám",
      value: "14/07/2021"
    },
    {
      title: "Giờ khám dự kiến",
      value: "07:30 - 08:30"
    },
    {
      title: "Giờ khám dự kiến",
      value: "07:30 - 08:30"
    },
    {
      title: 'Bệnh nhân:',
      value: 'Huỳnh Ngọc Toàn',
    },
    {
      title: 'Phí khám:',
      value: '200.000 VNĐ',
    },
    {
      title: 'Mã phiếu:',
      value: 'W2005069999',
    },
  ]
  return (
    <Container className={styles.container}>

      <Row className={styles.rowDetailBooking}>
        <Col xl={24} className={styles.colDetailBooking}>
          <h3>PHIẾU KHÁM BỆNH</h3>
          <Container className={styles.conInfo}>
            <div className={styles.address}>
              <p>Cơ sở khám chữa bệnh</p>
              <p>Địa chỉ cơ sở khám bệnh</p>
            </div>

            <div className={styles.barcode}>
              <p>Mã hẹn khám</p>
              <Barcode value="123456789" />
            </div>

            <div className={styles.status}>
              <p>Đã thanh toán</p>
            </div>

            <hr className={styles.hr} />

            <div className={styles.number}>
              <p>Số thứ tự tiếp nhận</p>
              <span>01</span>
            </div>

            <ul className={styles.listItemBooking}>
              {data.map(({ title, value }: any) => {
                return (
                  <li key={uniqueId()}>
                    <div className={styles.itemBooking}>
                      <p>{title}<span>{value}</span></p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <hr className={styles.hr} />

            <div className={styles.note}>
              <p>Lưu ý:</p>
              <ul className={styles.listNote}>
                <li>
                  <p>Quý bệnh nhân vui lòng đến phòng khám trước hẹn 15 phút để được hướng dẫn và khám bệnh.</p>
                </li>
                <li>
                  <p>Phiếu khám bệnh chỉ có giá trị trong ngày khám từ 6h30 - 20h00.</p>
                </li>
                <li>
                  <p>Quý bệnh nhân cần hỗ trợ vui lòng liên hệ tổng đài 19002115</p>
                </li>
                <li>
                  <p>Thông tin hướng dẫn cần biết khi đi khám chữa bệnh.</p>
                </li>
              </ul>
            </div>
          </Container>
          <Button className={styles.btnCancel}><CloseOutlined />Hủy phiếu</Button>
        </Col>
      </Row>
    </Container>
  )
}
