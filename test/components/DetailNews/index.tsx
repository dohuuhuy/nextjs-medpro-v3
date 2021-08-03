import Container from '@componentsTest/Container'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import { DataFailure, checkData } from '../DataFailure'
import styles from './style.module.less'
import moment from 'moment'
import Image from 'next/image'

interface DetailNewsCustom {
  dataDetail: any[],
  dataNewest: any[],
  dataSameNews: any[]
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const DetailNewsCustom = ({ dataDetail, dataNewest, dataSameNews }: DetailNewsCustom) => {
  if (checkData(dataDetail)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowContentPost}>
        <Col xs={24} xl={17} className={styles.colLeftPost}>
          <ul className={styles.listPost}>
            {dataDetail.map(({ title, created_at: createdAt, author, description, content }: any, index: number) => (
              <div key={index}>
                <li className={styles.title}>
                  <p>{title}</p>
                </li>
                <li className={styles.time}>
                  <p>{moment(createdAt).format('DD/MM/YYYY, h:mm') + ' bởi'} <span>{author}</span></p>
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
            ))}

          </ul>
        </Col>
        <Col xs={24} xl={7} className={styles.colRightPost}>
          <h2>TIN CÙNG CHUYÊN MỤC</h2>
          <ul className={styles.listCategory}>
            {dataSameNews.map(({ slug, image, title, created_at: createdAt }: any, index: number) => (
              <li key={index} className={styles.card}>
                <figure className={styles.cardImg}>
                  <img src={API_NEWS + image?.[0].url} alt="" />
                </figure>
                <div className={styles.cardBody}>
                  <Link href={`/tin-tuc/${slug}`}>
                    <p>{title}</p>
                  </Link>
                  <span>{moment(createdAt).format('DD/MM/YYYY, h:mm')}</span>
                </div>
              </li>
            ))}

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
            {dataNewest.map(({ slug, image, title, created_at: createdAt }: any, index: number) => (
              <li key={index} className={styles.cardNew}>
                <figure className={styles.cardNewImg}>
                  <img src={API_NEWS + image?.[0].url} alt="" />
                </figure>
                <div className={styles.cardNewBody}>
                  <Link href={`/tin-tuc/${slug}`}>
                    <p>{title}</p>
                  </Link>
                  <span>{moment(createdAt).format('DD/MM/YYYY, h:mm')}</span>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

const CardNewsCustom = ({
  slug,
  image,
  title,
  created_at: createdAt
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
          <p className={styles.title}>{title}</p></Link>
        <p>
          <span className={styles.time}>
            {moment(createdAt).format('DD/MM/YYYY, h:mm')}
          </span>
        </p>
      </div>
    </div>
  )
}
