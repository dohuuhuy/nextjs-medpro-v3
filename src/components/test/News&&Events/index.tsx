import styles from './style.module.less'
import { Row, Col } from 'antd'
import React from 'react'
import Container from '../Container'
import { NewsPage, NewsPageItem } from '@components/organisms/NewsCustom'

interface NewsCustom {
  dataNewsCustom: NewsPage
}

export const NewsCustom = ({ dataNewsCustom }: NewsCustom) => {
  console.log(dataNewsCustom)
  const dataNews = dataNewsCustom.slice(0, 5)
  return (
    <Container>
      <Row className={styles.title_event}>
        <p>Tin tức & sự kiện</p>
      </Row>
      <Row className={styles.con_Row}>
        {dataNews.map(
          ({ id, img, title, time, link, content }: NewsPageItem) => (
            <Col key={id} className={styles.con_ListNews}>
              <figure className={styles.con_img}>
                {/* <img src={img} alt='' /> */}
              </figure>
              <ul className={styles.con_content}>
                <li className={styles.con_content_title}>
                  <a href={link}>{title}</a>
                </li>
                <li className={styles.con_content_time}>
                  <p>{time}</p>
                </li>
                <li className={styles.con_content_paragraph}>
                  <p>{content}</p>
                </li>
              </ul>
            </Col>
          )
        )}
      </Row>
      <Row className={styles.div_btn}>
        <a href=''>Xem Thêm Các Bài Viết Khác {'>>'}</a>
      </Row>
    </Container>
  )
}
