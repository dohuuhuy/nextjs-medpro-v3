import { Col, Pagination, Row } from 'antd'
import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
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
        <Col xs={24} sm={24} md={12} xl={12}>
          <ul className={styles.listCard}>
            {listNewsBanner
              .slice(0, 1)
              ?.map(({ title, description, image }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <figure className={styles.cardImg}>
                    <img src={API_NEWS + image?.[0].url} alt=' ' />
                  </figure>
                  <div className={styles.cardBody}>
                    <a>{title}</a>
                    <span>{description}</span>
                  </div>
                </li>
              ))}
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12}>
          <ul className={styles.listCard}>
            {listNewsBanner
              ?.slice(1, 3)
              .map(({ title, description }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <a>{title}</a>
                  <span>{description}</span>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        <Col xs={24} sm={24} xl={15} className={styles.colContent}>
          <div className={styles.listNews}>
            {listNewsContent?.map(
              (
                { title, description, image, created_at: creatAt }: any,
                index: number
              ) => (
                <div key={index} className={styles.news}>
                  <figure className={styles.newsImg}>
                    <img src={API_NEWS + image?.[0].url} alt=' ' />
                  </figure>
                  <div className={styles.newsBody}>
                    <a>{title}</a>
                    <p>{moment.utc(creatAt).format('DD/MM/YYYY, H:mm')}</p>
                    <span>{description}</span>
                  </div>
                </div>
              )
            )}
          </div>
          <Pagination
            total={totalPages}
            onChange={onChange}
            pageSize={Math.ceil(Number(totalPages) / 8)}
            className={styles.Pagination}
            responsive
          />
        </Col>
        <Col xs={24} sm={24} xl={9} />
      </Row>
    </Container>
  )
}
