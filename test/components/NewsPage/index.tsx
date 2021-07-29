import { Row } from 'antd'
import React from 'react'
import Container from '../Container'
import styles from './style.module.less'

interface NewsPageCustom {
  dataNewsPageBanner: any[]
  dataNewsPageContent: any[]
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = ({ dataNewsPageBanner, dataNewsPageContent }: NewsPageCustom) => {
  const { DataFailure } = require('../DataFailure')
  if (!dataNewsPageBanner || dataNewsPageBanner.length < 1) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  if (!dataNewsPageContent || dataNewsPageContent.length < 1) {
    return <DataFailure description={'Lỗi không có data tin tức content'} />
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <ul className={styles.ListCard}>
          {dataNewsPageBanner.length && dataNewsPageBanner.slice(0, 1)?.map(({ title, description, image }: any, index: number) => (
            <li key={index}>
              <img
                className={styles.img}
                src={API_NEWS + image?.[0].url}
                alt=' '
              />
              <li>
                <p>{title}</p>
                <span>{description}</span>
              </li>
            </li>
          ))}
        </ul>
        <ul className={styles.ListCard}>
          {dataNewsPageBanner.length && dataNewsPageBanner.slice(1, 3)?.map(({ title, description }: any, index: number) => (
            <li key={index}>
              <p>{title}</p>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </Row>
      <Row className={styles.rowContent} />
    </Container>
  )
}
