import React, { useState } from 'react'
import styles from './style.module.less'
import { Row, Col, Pagination } from 'antd'
import { NewsPage, NewsPageItem } from '@components/organisms/NewsPage'

interface NewsPageCustom {
  dataNewsPage: NewsPage
}

export const NewsPageCustom = ({ dataNewsPage }: NewsPageCustom) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(7)
  const numberItem = 8
  const onChange = (value: number) => {
    console.log(value)
    setStart((value - 1) * numberItem)
    setEnd(value * numberItem)
    console.log(start, end)
  }
  console.log('cehck ', dataNewsPage)
  return (
    <div className={styles.container}>
      <p className={styles.titlePage}>Tin tức và sự kiện</p>
      <div>
        <Row>
          <Col span={2} />
          <Col span={20} className={styles.content}>
            <Row>
              <Col span={12}>
                <Row className={styles.div_img_big}>
                  <img
                    src={
                      'https://cms.medpro.com.vn/uploads/670x402_HD_DAT_KHAM_CHO_RAY_4e1fb053d2.png'
                    }
                    className={styles.img_big}
                  />
                </Row>
                <Row className={[styles.card__title, styles.card_big].join('')}>
                  <div>
                    <a>
                      <strong>
                        HƯỚNG DẪN TRA CỨU KẾT QUẢ KHÁM BỆNH TẠI BỆNH VIỆN CHỢ
                        RẪY
                      </strong>
                    </a>
                    <p>
                      Chức năng tra cứu kết quả khám bệnh đã được triển khai tại
                      Bệnh viện Chợ Rẫy mang nhiều lợi ích ưu việt cho người
                      bệnh, chỉ với một vài bước đơn giản, người bệnh đã tiết
                      kiệm được kha khá thời gian để hoàn thành việc cá nhân
                      thay vì phải ngồi đợi kết quả tại bệnh
                    </p>
                  </div>
                </Row>
              </Col>
              <Col span={12} className={styles.card__title}>
                <Row className={styles.colRight_first}>
                  <div>
                    <a>
                      <strong>
                        5 PHƯƠNG PHÁP GIẢM ĐAU ĐẦU, CHÓNG MẶT HIỆU QUẢ
                      </strong>
                    </a>
                    <p>
                      Thường xuyên đau đầu, chóng mặt làm ảnh hưởng không nhỏ
                      đến sức khỏe và cuộc sống sinh hoạt của người bệnh. Để hạn
                      chế tình trạng này, người bệnh có thể áp dụng 5 phương
                      pháp giảm đau đầu, chóng mặt nhanh chóng và hiệu quả dưới
                      đây.
                    </p>
                  </div>
                </Row>
                <Row className={styles.colRight_second}>
                  <div>
                    <a>
                      <strong>ĐAU NỬA ĐẦU</strong>
                    </a>
                    <p>
                      Đau nửa đầu (hay còn gọi là Migraine) được xếp vào một
                      trong những bệnh đặc biệt, chiếm khoảng 10% dân số, trong
                      đó bệnh nhân nữ gấp 3 lần bệnh nhân nam; người trẻ mắc
                      nhiều hơn. Biểu hiện của bệnh
                    </p>
                  </div>
                </Row>
              </Col>
            </Row>

            {dataNewsPage.map(
              ({ id, img, title, time, content }: NewsPageItem, index: any) => {
                if (index >= start && index < end) {
                  return (
                    <Row key={id} className={styles.listCard}>
                      <Col span={6}>
                        <div>
                          <img src={img} className={styles.img_small} />
                        </div>
                      </Col>
                      <Col span={9} className={styles.listCard_content}>
                        <a href=''>{title}</a>
                        <p className={styles.time}>{time}</p>
                        <p className={styles.content}>{content}</p>
                      </Col>
                    </Row>
                  )
                }
              }
            )}
            <Row className={styles.page}>
              <Col span={9}>
                <Pagination
                  defaultCurrent={1}
                  total={dataNewsPage.length}
                  pageSize={8}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Col>
          <Col span={2} />
        </Row>
      </div>
      {/* page */}
      {/* <div className={styles.page}>
      <Pagination
        defaultCurrent={1}
        total={data.length}
        pageSize={8}
        onChange={this.onChange}
      />
    </div> */}
    </div>
  )
}
