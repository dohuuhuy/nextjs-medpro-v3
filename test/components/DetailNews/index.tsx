import Container from '@componentsTest/Container'
import { Row, Col } from 'antd'
import Link from 'next/link'
import React from 'react'
import { DataFailure, checkData } from '../DataFailure'
import styles from './style.module.less'
import moment from 'moment'
import Image from 'next/image'
import cx from 'classnames'
export interface DetailNewsCustom {
  dataDetail: any[]
  dataNewest: any[]
  dataSameNews: any[]
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const DetailNewsCustom = ({
  dataDetail,
  dataNewest,
  dataSameNews
}: DetailNewsCustom) => {
  if (checkData(dataDetail)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowContentPost}>
        <Col xs={24} xl={16} lg={16} className={styles.colLeftPost}>
          <ul className={styles.listPost}>
            {dataDetail.map(
              (
                {
                  title,
                  created_at: createdAt,
                  author,
                  description,
                  content
                }: any,
                index: number
              ) => (
                <div key={index}>
                  <li className={styles.title}>
                    <p>{title}</p>
                  </li>
                  <li className={styles.time}>
                    <p>
                      <span>
                        {moment(createdAt).format('DD/MM/YYYY, h:mm')}
                      </span>
                      <span> {author}</span>
                    </p>
                  </li>
                  <li>
                    <blockquote className={styles.description}>
                      <p>{description}</p>
                    </blockquote>
                  </li>
                  <li className={styles.content}>
                    <p dangerouslySetInnerHTML={{ __html: content }} />
                  </li>
                </div>
              )
            )}
          </ul>
        </Col>
        <Col xs={24} xl={8} lg={8} className={styles.colRightPost}>
          <h2>TIN CÙNG CHUYÊN MỤC</h2>
          <ul className={styles.listCategory}>
            {dataSameNews.map((item: any, index: number) => (
              <CardNewsCustom item={item} key={index} />
            ))}
          </ul>
          <div className={styles.btnViewNews}>
            <Link href='/tin-tuc'>
              <a>
                <em>Xem tất cả</em>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className={styles.rowFooterPost}>
        <Col className={styles.colBottomPost}>
          <h2>BÀI VIẾT MỚI NHẤT</h2>

          <ul className={styles.listPostNew}>
            {dataNewest.map((item: any, index: number) => (
              <CardNewsCustom item={item} key={index} />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

interface PropsCard {
  item: any[]
  obsImg?: boolean
}

const CardNewsCustom = ({ item, obsImg = false }: PropsCard) => {
  const {
    image,
    slug,
    title,
    created_at: createdAt,
    description,
    author
  }: any = item
  const imgUrl = API_NEWS + image?.[0].url
  return (
    <div className={styles.cardNews} key={title}>
      <figure className={cx(styles.cardView, obsImg ? styles.hidden : '')}>
        <Image
          src={imgUrl}
          width='600'
          height='300'
          layout='responsive'
          loading='eager'
        />
      </figure>

      <div className={styles.cardBody}>
        <Link href={`/tin-tuc/${slug}`}>
          <a>
            <p className={styles.title}>{title}</p>
          </a>
        </Link>
        <p className={styles.time}>
          {moment(createdAt).format('DD/MM/YYYY, h:mm')}
        </p>
        {author && <p className={styles.author}>{author}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
