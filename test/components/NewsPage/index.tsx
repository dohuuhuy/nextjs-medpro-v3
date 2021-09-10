import { Col, Pagination, Row } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'
export interface Props {
  listNewsBanner: any[]
  listNewsContent?: any[]
  totalPages?: number
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = (props: Props) => {
  const { listNewsBanner, listNewsContent, totalPages } = props

  const router = useRouter()

  const onChange = (pageNumber: any) => {
    router.push(`?page=${pageNumber}`)
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colLeft}>
          <div className={styles.listNews}>
            {listNewsBanner?.slice(0, 1)?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} />
            ))}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colRight}>
          <div className={styles.listNews}>
            {listNewsBanner?.slice(1, 3)?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} obsImg={true} />
            ))}
          </div>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        <Col xs={24} sm={24} xl={15} className={styles.colContent}>
          <div className={styles.listNews}>
            {listNewsContent?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} />
            ))}
          </div>
          <Pagination
            total={totalPages}
            defaultCurrent={1}
            onChange={onChange}
            pageSize={Math.ceil(Number(totalPages) / 8)}
            className={styles.Pagination}
            responsive={true}
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </Col>
        <Col xs={24} sm={24} xl={9} />
      </Row>
    </Container>
  )
}

interface PropsCard {
  item: any[]
  obsImg?: boolean
}
const CardCustom = ({ item, obsImg = false }: PropsCard) => {
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
        <Link href={`/tin-tuc/${slug}`}>
          <a>
            <Image
              src={imgUrl}
              width='600'
              height='300'
              layout='responsive'
              loading='eager'
            />
          </a>
        </Link>
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
