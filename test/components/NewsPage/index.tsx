import { getListNewsContent } from '@actionStore/rootAction'
import { Col, Pagination, Row } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from '../Container'
import styles from './style.module.less'

interface NewsPageCustom {
  dataNewsPageBanner: any[]
  dataNewsPageContent?: any[]
  totalPages?: number
}
export const API_NEWS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = ({
  dataNewsPageBanner,
  dataNewsPageContent,
  totalPages
}: NewsPageCustom) => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListNewsContent(page))
  }, [page, dispatch])
  const onChange = (value: number) => {
    setPage(value)
    window.scrollTo(0, 0)
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
              ?.map(({ title, description, image, slug }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <figure className={styles.cardImg}>
                    <img src={API_NEWS + image?.[0].url} alt=' ' />
                  </figure>
                  <div className={styles.cardBody}>
                    <Link href={`/tin-tuc/${slug}`}>
                      <p>{title}</p>
                    </Link>
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
              .map(({ title, description, slug }: any, index: number) => (
                <li key={index} className={styles.card}>
                  <Link href={`/tin-tuc/${slug}`}>
                    <p>{title}</p>
                  </Link>
                  <span>{description}</span>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        <Col xs={24} sm={24} xl={15}>
          <div className={styles.listNews}>
            {dataNewsPageContent?.length &&
              dataNewsPageContent?.map(
                (
                  { title, description, image, slug, created_at: creatAt }: any,
                  index: number
                ) => (
                  <div key={index} className={styles.news}>
                    <div className={styles.newsImg}>
                      <img src={API_NEWS + image?.[0].url} alt=' ' />
                    </div>
                    <div className={styles.newsBody}>
                      <Link href={`/tin-tuc/${slug}`}>
                        <p className={styles.title}>{title}</p>
                      </Link>
                      <p className={styles.time}>{moment.utc(creatAt).format('DD/MM/YYYY, H:mm')}</p>
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
