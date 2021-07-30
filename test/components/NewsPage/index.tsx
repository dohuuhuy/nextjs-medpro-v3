import { Col, Pagination, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import styles from './style.module.less'
import moment from 'moment'
import { getListNewsContent, getCountNewsContent } from '@actionStore/rootAction'
import { useDispatch } from 'react-redux'

interface NewsPageCustom {
  dataNewsPageBanner: any[]
  dataNewsPageContent?: any[]
  totalPages?: number
}
export const API_NEWS = 'https://cms.medpro.com.vn'


export const NewsPageCustom = ({ dataNewsPageBanner, dataNewsPageContent, totalPages }: NewsPageCustom) => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountNewsContent())
    dispatch(getListNewsContent(page))
  }, [page, dispatch])

  console.log("data ", dataNewsPageContent, page)
  const onChange = () => {
    setPage(page + 1)
  }

  const { DataFailure, checkData } = require('../DataFailure')
  if (checkData(dataNewsPageBanner)) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <Col xs={24} sm={24} md={12} xl={12}>
          <ul className={styles.listCard}>
            {dataNewsPageBanner
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
            {dataNewsPageBanner
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
        <Col xs={24} sm={24} xl={15}>
          <ul className={styles.listNews}>
            {dataNewsPageContent?.length && dataNewsPageContent?.map(({ title, description, image, created_at: creatAt }: any, index: number) => (
              <li key={index} className={styles.news}>
                <figure className={styles.newsImg}>
                  <img src={API_NEWS + image?.[0].url} alt=" " />
                </figure>
                <div className={styles.newsBody}>
                  <a>{title}</a>
                  <p>{moment.utc(creatAt).format("DD/MM/YYYY, H:mm")}</p>
                  <span>{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={24} sm={24} xl={9} />
      </Row>
      <Row>
        <Pagination
          total={24}
          onChange={onChange}
        />
      </Row>
    </Container>
  )
}
