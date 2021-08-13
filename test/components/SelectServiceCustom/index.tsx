import Container from '../Container'
import { Row, Col } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.less'
import { HomeOutlined } from '@ant-design/icons'

export const SelectServiceCustom = () => {
  return (
    <Container className={styles.conService}>
      <Row className={styles.rowService}>
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
          </ul>
        </Col>
        <Col xs={24} xl={18} className={styles.colRight}>
          <h2 className={styles.title}>Vui lòng chọn dịch vụ</h2>
          <ul className={styles.listService}>
            <Row className={styles.rowKeys}>
              <Col xs={2} sm={2} xl={2}>
                #
              </Col>
              <Col xs={9} sm={13} xl={13}>
                Tên dịch vụ
              </Col>
              <Col xs={8} sm={4} xl={4}>
                Giá tiền
              </Col>
              <Col xs={5} sm={5} xl={5} />
            </Row>
            {/* mảng dữ liệu dịch vụ được khởi tạo ở đây */}
            <Row className={styles.rowValues}>
              <Col xs={2} sm={2} xl={2}>
                <p>1</p>
              </Col>
              <Col xs={9} sm={13} xl={13} className={styles.service}>
                <p>Khám theo yêu cầu: 80.000đ</p>
                <span>Lịch khám: Thứ 2</span>
              </Col>
              <Col xs={8} sm={4} xl={4}>
                80.000đ
              </Col>
              <Col xs={5} sm={5} xl={5} className={styles.select}>
                <Link href={`/chon-lich-kham`}>
                  <p>Chọn</p>
                </Link>
              </Col>
            </Row>
            <Row className={styles.rowValues}>
              <Col xs={2} sm={2} xl={2}>
                <p>2</p>
              </Col>
              <Col xs={9} sm={13} xl={13} className={styles.service}>
                <p>Khám theo yêu cầu: 150.000đ</p>
                <span>Lịch khám: Thứ 2</span>
              </Col>
              <Col xs={8} sm={4} xl={4}>
                150.000đ
              </Col>
              <Col xs={5} sm={5} xl={5} className={styles.select}>
                <Link href={`/chon-lich-kham`}>
                  <p>Chọn</p>
                </Link>
              </Col>
            </Row>
            {/* ---------------------------------------------- */}
          </ul>
          <div className={styles.btnBack}>
            <Link href={`/chon-chuyen-khoa`}>
              <p>Quay lại</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
