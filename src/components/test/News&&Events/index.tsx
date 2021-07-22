import styles from './style.module.less'
import { Row, Col, Button } from 'antd'
import React from 'react'
import Container from '../Container'

// interface Props {

// }

export const NewsCustom = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.title_event}>
          <p>Tin tức & sự kiện</p>
        </div>
        <div>
          <Row className={styles.con_Row}>
            <Col span={10} className={styles.margin_col_big}>
              <div className={styles.col}>
                <figure className={styles.img}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/cover_5c0dba1473.png'
                    }
                    alt=''
                  />
                </figure>
                <div className={styles.con_content}>
                  <p className={styles.title}>
                    <a href='/tin-tuc/medpro-dat-lich-kham-benh-truc-tuyen-giai-phap-ket-noi-benh-vien-voi-nguoi-benh'>
                      Medpro - Đặt Lịch Khám Bệnh Trực Tuyến, Giải Pháp Kết Nối
                      Bệnh Viện Với Người Bệnh
                    </a>
                  </p>
                  <p className={styles.time}>29/04/2021, 04:21</p>
                  <p className={styles.author}>Admin</p>
                  <p className={styles.content}>
                    Với Medpro, người bệnh chỉ cần một chiếc điện thoại thông
                    minh là có thể dễ dàng kết nối với bệnh viện để đặt lịch mà
                    không cần phải đến bệnh viện xếp hàng chờ đợi nữa. Phía bệnh
                    viện cũng sẽ dễ dàng điều chỉnh số lượng phòng khám, số
                    lượng bệnh nhân đến khám và sắp xếp nhân sự cho phù hợp vừa
                    giảm tải áp lực cho nhân viên y tế vừa phù hợp với chỉ đạo
                    giãn cách xã hội của Thủ tướng Chính phủ.
                  </p>
                </div>
              </div>
            </Col>
            <Col span={7} className={styles.margin_col_small}>
              <Row className={styles.col}>
                <figure className={styles.img}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/670x402_nhan_ngay_ket_qua_1e684ff781.png'
                    }
                    alt=''
                  />
                </figure>
                <div className={styles.con_content}>
                  <p className={styles.title}>
                    <a href='/tin-tuc/benh-vien-cho-ray-trien-khai-tinh-nang-tra-cuu-ket-qua-kham-benh'>
                      BỆNH VIỆN CHỢ RẪY TRIỂN KHAI TÍNH NĂNG TRA CỨU KẾT QUẢ
                      KHÁM BỆNH
                    </a>
                  </p>
                  <p className={styles.time}>25/06/2021, 03:39</p>
                </div>
              </Row>
              <Row className={styles.col}>
                <figure className={styles.img}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/670x402_BENH_THAN_TRONG_COVID_2_436238b39c.jpg'
                    }
                    alt=''
                  />
                </figure>
                <div className={styles.con_content}>
                  <p className={styles.title}>
                    <a href='/tin-tuc/benh-vien-cho-ray-trien-khai-tinh-nang-tra-cuu-ket-qua-kham-benh'>
                      CHĂM SÓC SỨC KHỎE CHO NGƯỜI CHĂM NGƯỜI BỆNH
                    </a>
                  </p>
                  <p className={styles.time}>23/06/2021, 02:53</p>
                </div>
              </Row>
            </Col>
            <Col span={7} className={styles.margin_col_small}>
              <Row className={styles.col}>
                <figure className={styles.img}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/670x402_CHI_SO_NHIP_TIM_9bbd57a2d1.jpg'
                    }
                    alt=''
                  />
                </figure>
                <div className={styles.con_content}>
                  <p className={styles.title}>
                    <a href='/tin-tuc/benh-vien-cho-ray-trien-khai-tinh-nang-tra-cuu-ket-qua-kham-benh'>
                      BIẾN CHỨNG NGUY HIỂM VÌ THÓI QUEN BỎ QUA CHỈ SỐ VỀ NHỊP
                      TIM
                    </a>
                  </p>
                  <p className={styles.time}>24/06/2021, 01:11</p>
                </div>
              </Row>
              <Row className={styles.col}>
                <figure className={styles.img}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/670x402_HEN_SUYEN_COVID_633a3e22c7.jpg'
                    }
                    alt=''
                  />
                </figure>
                <div className={styles.con_content}>
                  <p className={styles.title}>
                    <a href='/tin-tuc/benh-vien-cho-ray-trien-khai-tinh-nang-tra-cuu-ket-qua-kham-benh'>
                      BẢO VỆ NGƯỜI BỆNH HEN SUYỄN TRONG MÙA COVID-19
                    </a>
                  </p>
                  <p className={styles.time}>23/06/2021, 02:51</p>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.div_btn}>
          <a href=''>Xem Thêm Các Bài Viết Khác {'>>'}</a>
        </div>
      </div>
    </Container>
  )
}
