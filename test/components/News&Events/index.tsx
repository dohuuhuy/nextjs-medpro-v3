import { DoubleRightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

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
            <a>
              Xem Thêm Các Bài Viết Khác <DoubleRightOutlined />
            </a>
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

const CardNewsCustom = ({
  slug,
  image,
  title,
  created_at: createdAt,
  description,
  author
}: any) => {
  const imgUrl1 = API_NEWS + image?.[0].url
  return (
    <div className={styles.cardNews}>
      <figure className={styles.cardView}>
        <Image
          src={imgUrl1}
          width='500'
          height='300'
          layout='responsive'
          loading='eager'
        />
      </figure>
      <div className={styles.cardBody}>
        <Link href={`/tin-tuc/${slug}`}>
          <p className={styles.title}>{title}</p>
        </Link>
        <p>
          <span className={styles.time}>
            {moment(createdAt).format('DD/MM/YYYY, h:mm')}
          </span>
          <span className={styles.author}>{author}</span>
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
