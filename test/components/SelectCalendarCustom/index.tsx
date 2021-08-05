import { HomeOutlined } from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Row, Col, CalendarProps, Calendar } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './style.module.less'


export const SelectCalendarCustom = () => {
  return (
    <Container className={styles.conCalendar}>
      <Row className={styles.rowCalendar}>
        <Col xs={24} xl={6} className={styles.colLeft}>
          <h2 className={styles.title}>Thông tin khám</h2>
          <ul className={styles.listInfo}>
            <li className={styles.Info}>
              <figure className={styles.ImgInfo}>
                {/* <img /> */}
                <HomeOutlined />
              </figure>
              <div className={styles.content}>
                <p>Bệnh viện Nhi Đồng 1</p>
              </div>
            </li>
            <li className={styles.Info}>
              <figure className={styles.ImgInfo}>
                {/* <img /> */}
                <HomeOutlined />
              </figure>
              <div className={styles.content}>
                <p>Chuyên khoa: Ngoại thần kinh</p>
              </div>
            </li>
            <li className={styles.Info}>
              <figure className={styles.ImgInfo}>
                {/* <img /> */}
                <HomeOutlined />
              </figure>
              <div className={styles.content}>
                <p>Dịch vụ: Khám theo yêu cầu: 80.000đ</p>
              </div>
            </li>
          </ul>
        </Col>
        <Col xs={24} xl={18} className={styles.colRight}>
          <h2 className={styles.title}>Vui lòng chọn ngày khám</h2>
          <ul>
            <li>
              <Calendar
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  return (
                    <div>
                      <h2>THÁNG {value.month() + 1} - {value.year()}</h2>
                    </div>
                  )
                }}
                dateCellRender={({ date }) => {
                  return ()
                }} />
            </li>
          </ul>
          <div className={styles.btnBack}>
            <Link href={`/chon-dich-vu`}>
              <p>Quay lại</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
