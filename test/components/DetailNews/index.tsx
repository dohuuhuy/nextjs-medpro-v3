import Container from '@componentsTest/Container'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import { DataFailure, checkData } from '../DataFailure'
import styles from './style.module.less'

interface DetailNewsCustom {
  dataDetail: any[]
}

export const DetailNewsCustom = ({ dataDetail }: DetailNewsCustom) => {
  if (checkData(dataDetail)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowContentPost}>
        <Col xs={24} xl={17} className={styles.colLeftPost}>
          <ul className={styles.listPost}>
            <li className={styles.title}>
              <p>MEDPRO - ĐẶT LỊCH KHÁM BỆNH TRỰC TUYẾN, GIẢI PHÁP KẾT NỐI BỆNH VIỆN VỚI NGƯỜI BỆNH</p>
            </li>
            <li className={styles.time}>
              <p>02/08/2021 11:56 bởi <span>tác giả</span></p>
            </li>
            <li>
              <blockquote className={styles.description}>
                <p>Với Medpro, người bệnh chỉ cần một chiếc điện thoại thông minh là có thể dễ dàng kết nối với bệnh viện để đặt lịch mà không cần phải đến bệnh viện xếp hàng chờ đợi nữa. Phía bệnh viện cũng sẽ dễ dàng điều chỉnh số lượng phòng khám, số lượng bệnh nhân đến khám và sắp xếp nhân sự cho phù hợp vừa giảm tải áp lực cho nhân viên y tế vừa phù hợp với chỉ đạo giãn cách xã hội của Thủ tướng Chính phủ.</p>
              </blockquote>
            </li>
            <li className={styles.content}>
              <p>Những bất cập hiện nay trong việc khám chữa bệnh tại bệnh viện

                Việc xếp hàng bốc số ở các bệnh viện luôn là vấn đề khiến nhiều người bệnh cảm thấy mệt mỏi vì phải xếp hàng nhiều giờ liền. Đặc biệt với tình hình dịch bệnh Covid19 như hiện nay, người bệnh sẽ không khỏi lo lắng khi phải đến bệnh viện xếp hàng như vậy. Tiếp đến, việc quản lý thông tin người bệnh có thể sai sót khi phải lưu trữ theo phương pháp thủ công gây khó khăn cho việc khám, theo dõi và chẩn đoán bệnh của bác sĩ. Bên cạnh đó, rất nhiều bệnh nhân trong quá trình điều trị tại nhà cần được tư vấn nhưng không thể để liên lạc với bác sĩ. Để giúp các bệnh viện giải quyết vấn đề này, Sao Bắc Đẩu Miền Nam kết hợp với công ty cổ phần ứng dụng PKH phát triển mềm đăng ký khám bệnh trực tuyến - Medpro. Được xem</p>
              {/* <p dangerouslySetInnerHTML={{ __html: description }} /> */}
            </li>
          </ul>
        </Col>
        <Col xs={24} xl={7} className={styles.colRightPost}>
          <h2>TIN CÙNG CHUYÊN MỤC</h2>
          <ul className={styles.listCategory}>
            <li className={styles.card}>
              <figure className={styles.cardImg}>
                <img src={"https://cms.medpro.com.vn/uploads/1627848346858_fa91a92bc9.png"} alt="" />
              </figure>
              <div className={styles.cardBody}>
                <Link href={""}>
                  <p>NGUYÊN NHÂN TIỂU TIỆN NHIỀU Ở TRẺ  NHIỀU Ở TRẺ NHIỀU Ở TRẺ NHIỀU Ở TRẺ NHIỀU Ở TRẺ</p>
                </Link>
                <span>02/08/2021, 03:09</span>
              </div>
            </li>
            <li className={styles.card}>
              <figure className={styles.cardImg}>
                <img src={"https://cms.medpro.com.vn/uploads/1627848346858_fa91a92bc9.png"} alt="" />
              </figure>
              <div className={styles.cardBody}>
                <Link href={""}>
                  <p>NGUYÊN NHÂN TIỂU TIỆN NHIỀU Ở TRẺ  NHIỀU Ở TRẺ NHIỀU Ở TRẺ NHIỀU Ở TRẺ NHIỀU Ở TRẺ</p>
                </Link>
                <span>02/08/2021, 03:09</span>
              </div>
            </li>
          </ul>
          <div className={styles.btnViewNews}>
            <Link href='/tin-tuc'>
              <p>Xem tất cả</p>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className={styles.rowFooterPost}>
        <Col className={styles.colBottomPost}>
          <div className={styles.titleBot}><p>BÀI VIẾT MỚI NHẤT</p></div>
          <ul className={styles.listPostNew}>
            <li className={styles.cardNew}>
              <figure className={styles.cardNewImg}>
                <img src="https://cms.medpro.com.vn/uploads/1627848346858_fa91a92bc9.png" alt="" />
              </figure>
              <div className={styles.cardNewBody}>
                <Link href={""}>
                  <p>NGUYÊN NHÂN TIỂU TIỆN NHIỀU Ở TRẺ</p>
                </Link>
                <span>02/08/2021, 03:09</span>
              </div>
            </li>
            <li className={styles.cardNew}>
              <figure className={styles.cardNewImg}>
                <img src="https://cms.medpro.com.vn/uploads/1627848346858_fa91a92bc9.png" alt="" />
              </figure>
              <div className={styles.cardNewBody}>
                <Link href={""}>
                  <p>NGUYÊN NHÂN TIỂU TIỆN NHIỀU Ở TRẺ</p>
                </Link>
                <span>02/08/2021, 03:09</span>
              </div>
            </li>
            <li className={styles.cardNew}>
              <figure className={styles.cardNewImg}>
                <img src="https://cms.medpro.com.vn/uploads/1627848346858_fa91a92bc9.png" alt="" />
              </figure>
              <div className={styles.cardNewBody}>
                <Link href={""}>
                  <p>NGUYÊN NHÂN TIỂU TIỆN NHIỀU Ở TRẺ</p>
                </Link>
                <span>02/08/2021, 03:09</span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
