import { Col, Pagination, Row } from 'antd'
import cx from 'classnames'
import moment from 'moment'
<<<<<<< HEAD
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
=======
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
>>>>>>> 9d2ed50fb69cec5e6d1848345a0b6e0d22ba6db2
import Container from '../Container'
import styles from './style.module.less'
interface NewsPageCustom {
  listNewsBanner: any[]
  listNewsContent?: any[]
  totalPages?: number
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = ({
  listNewsBanner,
  listNewsContent,
  totalPages
}: NewsPageCustom) => {
  const router = useRouter()

  const onChange = (pageNumber: any) => {
    router.push(`?page=${pageNumber}`)
  }

  const { DataFailure, checkData } = require('../DataFailure')
  if (checkData(listNewsBanner)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colLeft}>
          <div className={styles.listNews}>
            {listNewsBanner.slice(0, 1)?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} />
            ))}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colRight}>
          <div className={styles.listNews}>
            {listNewsBanner?.slice(1, 3).map((item: any, i: number) => (
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
            responsive
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
  const { image, title, created_at: createdAt, description, author }: any = item
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
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>
          {moment(createdAt).format('DD/MM/YYYY, h:mm')}
        </p>
        {author && <p className={styles.author}>{author}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
