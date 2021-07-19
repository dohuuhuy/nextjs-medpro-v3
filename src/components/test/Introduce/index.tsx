import React, { Component } from "react";
import Styles from "./style.module.scss";
import { Grid, Row, Col } from "antd";

export default class Solution extends Component {
  render() {
    return (
      <div className={Styles.solutionBox}>
        <Row className={Styles.con_Para}>
          <Col span={2} className={Styles.null} />
          <Col span={7} className={Styles.intro}>
            <div>
              <span>Giới thiệu</span>
            </div>
            <h3>MEDPRO - Giải pháp tiếp cận y tế thông minh</h3>
          </Col>
          <Col span={1} className={Styles.null} />
          <Col span={12} className={Styles.Paragraph}>
            <strong>Medpro </strong>
            là giải pháp nhằm kết nối bệnh viện với người dùng có nhu cầu đăng
            ký khám bệnh có thể thực hiện việc đăng ký khám bệnh hoàn toàn trực
            tuyến ở mọi lúc mọi nơi, mà không cần phải đến bệnh viện đề xếp hàng
            và chờ đợi. Giúp bệnh nhân có kế hoạch khám chữa bệnh chủ động, rút
            ngắn thời gian chờ đợi, góp phần nâng cao sức khoẻ bệnh nhân.
          </Col>
          <Col span={2} className={Styles.null} />
        </Row>
        <div className={Styles.card}>
          <div className={Styles.boxCard}>
            <div className={Styles.footerCard}>
              <div>
                <img
                  src={"https://medpro.com.vn/static/media/new1.bb081b99.jpg"}
                  className={Styles.img}
                />
              </div>
              <div className={Styles.footerCard_Text}>
                <div className={Styles.title}>
                  <span>Đặt khám nhanh chóng</span>
                  <p>
                    Bệnh nhân chủ động chọn thông tin đặt khám (ngày khám và giờ
                    khám)
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.footerCard}>
              <div>
                <img
                  src={"https://medpro.com.vn/static/media/new2.6ba3e73f.jpg"}
                  className={Styles.img}
                />
              </div>
              <div className={Styles.footerCard_Text}>
                <div className={Styles.title}>
                  <span>Thanh toán dễ dàng</span>
                  <p>Người dùng chọn và thực hiện thanh toán trên phần mềm</p>
                </div>
              </div>
            </div>
            <div className={Styles.footerCard}>
              <div>
                <img
                  src={"https://medpro.com.vn/static/media/new3.428dc3ad.jpg"}
                  className={Styles.img}
                />
              </div>
              <div className={Styles.footerCard_Text}>
                <div className={Styles.title}>
                  <span>Nhận phiếu trực tiếp</span>
                  <p>
                    Bệnh nhân sẽ nhận phiếu khám trực tuyến ngay trên phần mềm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
