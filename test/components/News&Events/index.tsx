import { Col, Row, Space } from 'antd'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export const API_CMS = 'https://cms.medpro.com.vn'

export const NewsEventCustom = ({ dataNewsAndEvent }: any) => {
  if (!dataNewsAndEvent) {
    return null
  }

  return (
    <Container tag={'section'} className={styles.dataNewsAndEvent}>
      <Row className={styles.rowTitle}>
        <h2>Tin tức & sự kiện</h2>
      </Row>
      <Row className={styles.rowListNews}>
        <Col xl={10} lg={10} md={24} className={styles.colListNewsPin}>
          <ul className={styles.ListNewsAndEvent}>
            {dataNewsAndEvent?.slice(0, 1)?.map((item: Post) => {
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
            {dataNewsAndEvent?.slice(1, 5)?.map((item: Post) => {
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
        <Link href='/tin-tuc'>
          <a>
            <i>Xem thêm</i>
          </a>
        </Link>
      </Row>
    </Container>
  )
}

const myLoader = ({ src, width, quality }: any): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const CardNewsCustom = (item: Post): JSX.Element => {
  const imgUrl1 = API_CMS + item.image?.[0].url
  return (
    <div className={styles.cardNews}>
      <figure className={styles.cardView}>
        <Image
          loader={myLoader}
          src={imgUrl1}
          width='500'
          height='300'
          objectFit='cover'
          layout='responsive'
          loading='eager'
          alt=''
          priority={true}
        />
      </figure>
      <div className={styles.cardBody}>
        <Link href={`/tin-tuc/${item?.slug}`}>
          <a>
            <p className={styles.title}>{item?.title}</p>
          </a>
        </Link>
        <Space style={{ width: '100%' }}>
          <span className={styles.time}>
            {moment(item?.created_at).format('DD/MM/YYYY, h:mm')}
          </span>
          <span className={styles.author}>{item?.author}</span>
        </Space>
        <p className={styles.description}>{item?.description}</p>
      </div>
    </div>
  )
}

export interface Post {
  id: any
  slug: string
  image: any
  title: string
  created_at: string
  description: string
  author: string
}
