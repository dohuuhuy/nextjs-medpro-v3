import { HomeOutlined } from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Row, Col, Calendar } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './style.module.less'
import cx from 'classnames'

export const SelectCalendarCustom = () => {
  const [Date, setDate] = useState()
  const onChange = (value: any) => {
    setDate(value)
  }
  return (
    <Container className={styles.conCalendar}>
      <Row className={styles.rowCalendar}>
        <Col xs={24} sm={24} md={6} xl={6} className={styles.colLeft}>
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
        <Col xs={24} sm={24} md={18} xl={18} className={styles.colRight}>
          <h2 className={styles.title}>Vui lòng chọn ngày khám</h2>
          <ul className={styles.listCalendar}>
            <li className={styles.cardCalendar}>
              <Calendar
                headerRender={({ value }) => {
                  return (
                    <div>
                      <h2>
                        THÁNG {value.month() + 1} - {value.year()}
                      </h2>
                    </div>
                  )
                }}
                onSelect={onChange}
              />
            </li>
          </ul>
          <ul className={cx(Date ? styles.listTime : styles.hidden)}>
            <h2>Buổi sáng</h2>
            <li className={styles.cardTime}>
              <p>7:00 - 8:30</p>
              <p>7:00 - 8:30</p>
              <p>7:00 - 8:30</p>
              <p>7:00 - 8:30</p>
              <p>7:00 - 8:30</p>
              <p>7:00 - 8:30</p>
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
