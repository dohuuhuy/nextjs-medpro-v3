import { Col, Row, Pagination } from 'antd'
import React from 'react'
import Container from '../Container'
import styles from './style.module.less'

interface NewsPageCustom {
  dataNewsPageBanner: any[]
  dataNewsPageContent: any[]
  totalData: number
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = ({
  dataNewsPageBanner,
  dataNewsPageContent,
  totalData,
}: NewsPageCustom) => {
  const { DataFailure, checkData } = require('../DataFailure')
  if (checkData(dataNewsPageBanner)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  if (checkData(dataNewsPageContent)) {
    return <DataFailure description={'Lỗi không có data tin tức content'} />
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <Col xl={12}>
          <ul className={styles.listCard}>
            {dataNewsPageBanner
              .slice(0, 1)
              ?.map(({ title, description, image }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <figure className={styles.cardImg}>
                    <img
                      src={API_NEWS + image?.[0].url}
                      alt=' '
                    />
                  </figure>
                  <div className={styles.cardBody}>
                    <p>{title}</p>
                    <span>{description}</span>
                  </div>
                </li>
              ))}
          </ul>
        </Col>
        <Col xl={12}>
          <ul className={styles.listCard}>
            {dataNewsPageBanner
              ?.slice(1, 3)
              .map(({ title, description }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <p>{title}</p>
                  <span>{description}</span>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        {/* <Pagination pageSize={totalData} /> */}
      </Row>
    </Container>
  )
}
