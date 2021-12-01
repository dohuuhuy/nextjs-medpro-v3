import { Col, Row } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'
export interface DetailNewsCustom {
  detailNews: any[]
  sameNews: any[]
  listNewsBanner: any[]
}
export const API_CMS = 'https://cms.medpro.com.vn'

export const DetailNewsCustom = ({
  detailNews,
  sameNews,
  listNewsBanner
}: DetailNewsCustom) => {
  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowContentPost}>
        <Col xs={24} xl={16} lg={16} className={styles.colLeftPost}>
          <ul className={styles.listPost}>
            {detailNews?.map((item: Post) => {
              return (
                <div key={item.id}>
                  <li className={styles.title}>
                    <h2>{item?.title}</h2>
                  </li>
                  <li className={styles.time}>
                    <p>
                      <span>
                        {moment(item?.created_at).format('DD/MM/YYYY, h:mm')}
                      </span>
                      <span> {item?.author}</span>
                    </p>
                  </li>
                  <li>
                    <blockquote className={styles.description}>
                      <p>{item?.description}</p>
                    </blockquote>
                  </li>
                  <li className={styles.content}>
                    <div
                      className={styles.divContent}
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </li>
                </div>
              )
            })}
          </ul>
        </Col>
        <Col xs={24} xl={8} lg={8} className={styles.colRightPost}>
          <h2>TIN CÙNG CHUYÊN MỤC</h2>
          <ul className={styles.listCategory}>
            {sameNews?.map((item: Post) => (
              <CardNewsCustom item={item} key={item.id} />
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
        <Col span={24} className={styles.colBottomPost}>
          <h2>BÀI VIẾT MỚI NHẤT</h2>

          <ul className={styles.listPostNew}>
            {listNewsBanner?.map((item: Post) => (
              <CardNewsCustom item={item} key={item.id} />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

interface PropsCard {
  item: any
  obsImg?: boolean
}

const myLoader = ({ src, width, quality }: any): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const CardNewsCustom = ({ item, obsImg = false }: PropsCard) => {
  const imgUrl = API_CMS + item?.image?.[0].url
  return (
    <div className={styles.cardNews} key={item?.title}>
      <figure className={cx(styles.cardView, obsImg ? styles.hidden : '')}>
        <Link href={`/tin-tuc/${item?.slug}`}>
          <a>
            <Image
              loader={myLoader}
              src={imgUrl}
              width='600'
              height='300'
              layout='responsive'
              objectFit='cover'
              loading='eager'
              alt=''
              priority
            />
          </a>
        </Link>
      </figure>

      <div className={styles.cardBody}>
        <Link href={`/tin-tuc/${item?.slug}`}>
          <a>
            <p className={styles.title}>{item?.title}</p>
          </a>
        </Link>
        <p className={styles.time}>
          {moment(item?.created_at).format('DD/MM/YYYY, h:mm')}
        </p>
        {item?.author && <p className={styles.author}>{item?.author}</p>}
        <p className={styles.description}>{item?.description}</p>
      </div>
    </div>
  )
}

export interface Post {
  id: any
  slug: string
  image: any
  content: any
  title: string
  created_at: string
  description: string
  author: string
}
