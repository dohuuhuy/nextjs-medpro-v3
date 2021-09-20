import React from 'react'
import styles from './styles.module.less'
import { Row, Col, Input, Button } from 'antd'
import Container from '@componentsTest/Container'
import { DownOutlined } from '@ant-design/icons'
import { Icon } from '@componentsTest/Icon'
import { SpecialContent } from './ListDatKham/Specialist'
import { DoctorContent } from './ListDatKham/Doctor'

export const DatKham = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.rowBooking}>
        <Col md={24} xl={15} className={styles.colBooking}>
          <Row className={styles.Specialist}>
            <div className={styles.title}>
              <p>Chuyên khoa</p>
              <DownOutlined />
            </div>
            <Input className={styles.inputView} prefix={<Icon name='chuyenkhoa' />} placeholder="Chọn chuyên khoa" />
          </Row>
          <SpecialContent />
          <Row className={styles.Doctor}>
            <div className={styles.title}>
              <p>Bác sĩ</p>
              <DownOutlined />
            </div>
            <Input className={styles.inputView} prefix={<Icon name='bacsi' />} placeholder="Chọn bác sĩ" />
          </Row>
          <DoctorContent />
          <Row className={styles.Service}>
            <div className={styles.title}>
              <p>Dịch vụ</p>
              <DownOutlined />
            </div>
            <Input className={styles.inputView} prefix={<Icon name='dichvu' />} placeholder="Chọn dịch vụ" />
          </Row>
          <Row className={styles.Calender}>
            <div className={styles.title}>
              <p>Ngày giờ</p>
              <DownOutlined />
            </div>
            <Input className={styles.inputView} prefix={<Icon name='lichkham' />} placeholder="Chọn ngày giờ khám" />
          </Row>
        </Col>
        <Col md={24} xl={9} className={styles.colBill}>
          <div className={styles.billNote}>
            <p><Icon name="thongtin" /> Vui lòng kiểm tra lại thông tin trước khi đặt lịch</p>
          </div>
          <div className={styles.billContent}>
            <p>Phí khám bệnh<span>0 VNĐ</span></p>
            <p>Phí tiện ích<span>0 VNĐ</span></p>
            <p>Tổng tiền<span>0 VNĐ</span></p>
          </div>
          <div className={styles.billButon}>
            <Button className={styles.return}>Trở về</Button>
            <Button className={styles.continue}>Tiếp tục</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
