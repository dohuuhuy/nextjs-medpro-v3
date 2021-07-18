import React from "react";
import style from "./style.module.scss";
import { Layout, Row, Col } from "antd";
import { chunk } from "lodash";

const { Content } = Layout;

class FormsSupport extends React.Component {
  render() {
    var dataSupport = [
      {
        img: "https://medpro.com.vn/static/media/support.8cccd18a.svg",
        title: "Hỗ trợ đặt khám",
        selectOption: "1900-2115",
        link: "#",
      },
      {
        img: "https://medpro.com.vn/static/media/facebook.c9e1625b.svg",
        title: "Fanpage Facebook",
        selectOption: "Bấm vào đây",
        link: "#",
      },
      {
        img: "https://medpro.com.vn/static/media/qrmed.f0bb2880.jpg",
        title: "Hỗ trợ ZALO",
        selectOption: "Bấm vào đây",
        link: "#",
      },
      {
        img: "data:image/png;base64,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",
        title: "Chat Facebook",
        selectOption: "Bấm vào đây",
        link: "#",
      },
    ];

    const renderOptionsSupport = dataSupport.map((item) => {
      return (
        <Col className={style.colSupport}>
          <Col className={style.cardSupport}>
            <img src={item.img} className={style.img} />
            <p className={style.titleCard}>{item.title}</p>
            <a href={item.link}>
              <p className={style.selectSupport}>{item.selectOption}</p>
            </a>
          </Col>
        </Col>
      );
    });
    return (
      <Content className={style.viewContent}>
        <Content className={style.content}>
          <div className={style.subTitle}>
            <p>Hỗ trợ</p>
            <h1>Các hình thức hỗ trợ</h1>
          </div>

          <div className={style.viewSupport}>{renderOptionsSupport}</div>
        </Content>
      </Content>
    );
  }
}

export default FormsSupport;
