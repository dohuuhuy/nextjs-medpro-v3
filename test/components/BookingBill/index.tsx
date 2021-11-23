import { CloseOutlined } from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Button, Col, Row } from 'antd'
import { uniqueId } from 'lodash'
import React, { useState } from 'react'
import { useBarcode } from 'react-barcodes'
import { ModalCancel } from './components/Modal_Cancel'
import styles from './styles.module.less'
import cx from 'classnames'

export const BookingBill = () => {
  const { inputRef } = useBarcode({
    value: 'react-barcodes',
    options: {
      width: 1,
      height: 70,
      fontSize: 13
    }
  })
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }

  const CustomLine = ({ top, bottom, normal = true } : any) => {
    return(
      <div className={cx(
        styles.line,
        top && styles.top,
        bottom && styles.bottom,
        normal
      )}>
        <div className={styles.circle} />
        <div className={styles.dashed} />
        <div className={styles.circle} />
      </div>
    )
  }
  return (
    <Container className={styles.container}>
      <Row className={styles.rowDetailBooking}>
        <Col xl={24} className={styles.colDetailBooking}>
          {<CustomLine top />}

          <h3>PHIẾU KHÁM BỆNH</h3>
          <div className={styles.conInfo}>
            <div className={styles.address}>
              <p>Cơ sở khám chữa bệnh</p>
              <p>Địa chỉ cơ sở khám bệnh</p>
            </div>

            <div className={styles.barcode}>
              <p>Mã hẹn khám</p>
              <canvas ref={inputRef} />
            </div>

            <div className={styles.status}>
              <p>Đã thanh toán</p>
            </div>

            {<CustomLine />}

            <div className={styles.number}>
              <p>Số thứ tự tiếp nhận</p>
              <span>01</span>
            </div>

            <ul className={styles.listItemBooking}>
              {data.map(({ title, value }: any) => {
                return (
                  <li key={uniqueId()}>
                    <p className={styles.itemBooking}>
                      <span> {title}</span>
                      <span>{value}</span>
                    </p>
                  </li>
                )
              })}
            </ul>

            {<CustomLine />}

            <div className={styles.note}>
              <p>Lưu ý:</p>
              <ul className={styles.listNote}>
                <li>
                  <p>
                    Quý bệnh nhân vui lòng đến phòng khám trước hẹn 15 phút để
                    được hướng dẫn và khám bệnh.
                  </p>
                </li>
                <li>
                  <p>
                    Phiếu khám bệnh chỉ có giá trị trong ngày khám từ 6h30 -
                    20h00.
                  </p>
                </li>
                <li>
                  <p>
                    Quý bệnh nhân cần hỗ trợ vui lòng liên hệ tổng đài 19002115
                  </p>
                </li>
                <li>
                  <p>Thông tin hướng dẫn cần biết khi đi khám chữa bệnh.</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button className={styles.btnCancel} onClick={handleModal}>
              <CloseOutlined />
              Hủy phiếu
            </Button>
            <ModalCancel showModal={showModal} setShowModal={setShowModal} />
          </div>
          {<CustomLine bottom />}
        </Col>
      </Row>
    </Container>
  )
}

interface Data {
  title: string
  value: string
}

const data: Data[] = [
  {
    title: 'Hình thức khám:',
    value: 'Dịch vụ'
  },
  {
    title: 'Phòng khám',
    value: 'P.Khám Da Liễu'
  },
  {
    title: 'Chuyên khoa:',
    value: 'Da Liễu'
  },
  {
    title: 'Bác sĩ:',
    value: 'Nguyễn Văn A'
  },
  {
    title: 'Ngày khám',
    value: '14/07/2021'
  },
  {
    title: 'Giờ khám dự kiến',
    value: '07:30 - 08:30'
  },
  {
    title: 'Giờ khám dự kiến',
    value: '07:30 - 08:30'
  },
  {
    title: 'Bệnh nhân:',
    value: 'Huỳnh Ngọc Toàn'
  },
  {
    title: 'Phí khám:',
    value: '200.000 VNĐ'
  },
  {
    title: 'Mã phiếu:',
    value: 'W2005069999'
  }
]
