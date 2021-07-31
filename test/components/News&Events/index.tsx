import { Button, Col, Row } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import styles from './style.module.less'

export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsEventCustom = ({ dataNewsAndEvent }: any) => {
  if (!dataNewsAndEvent || dataNewsAndEvent.length < 1) {
    return <em>Không có dataNewsEventCustom </em>
  }

  return (
    <Container className={styles.dataNewsAndEvent}>
      <Row className={styles.rowTitle}>
        <h2>Tin tức & sự kiện</h2>
      </Row>
      <Row className={styles.rowListNews}>
        <Col xl={10} lg={10} md={24} className={styles.colListNewsPin}>
          <ul className={styles.ListNewsAndEvent}>
            {dataNewsAndEvent.slice(0, 1).map((item: any) => {
              return (
                <li key={item?.id}>
                  <CardNewsCustom {...item} />
                </li>
              )
            })}
          </ul>
        </Col>
        <Col xl={14} lg={14} md={24} className={styles.colListNews}>
          <ul className={styles.ListNewsAndEvent}>
            {dataNewsAndEvent.slice(1, 5).map((item: any) => {
              return (
                <li key={item?.id}>
                  <CardNewsCustom {...item} />
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
      <Row className={styles.rowBtnViewDetails}>
        <Button>
          <Link href='/tin-tuc'>
            <a>Xem Thêm Các Bài Viết Khác {'>>'}</a>
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

const CardNewsCustom = ({
  image,
  title,
  created_at: createdAt,
  description,
  author
}: any) => {
  return (
    <div className={styles.cardNews}>
      <figure className={styles.cardView}>
        <img src={API_NEWS + image?.[0].url} alt='' />
      </figure>
      <div className={styles.cardBody}>
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>
          {moment(createdAt).format('DD/MM/YYYY, h:mm')}
        </p>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
