import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'
import { SupportMethod } from './SupportMethod.interface'
import { DataFailure, checkData } from '../DataFailure'
export interface SupportMedthodCustom {
  dataSupportMethod: SupportMethod
}

export const SupportMedthodCustom = ({
  dataSupportMethod
}: SupportMedthodCustom) => {
  if (checkData(dataSupportMethod)) {
    return <DataFailure description={'Lỗi không có data hỗ trợ'} />
  }

  return (
    <Container className={styles.supportMedthod}>
      <Row className={styles.rowSupport}>
        <span className={styles.title}>Hỗ trợ</span>
        <h3 className={styles.subTitle}>Các hình thức hỗ trợ</h3>
      </Row>
      <Row className={styles.listSupportRow}>
        {dataSupportMethod?.map(
          (
            { nameMedthod, imgCard, description, link = '#' }: any,
            index: number
          ) => (
            <Col
              key={index}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={styles.itemSupportCol}
            >
              <div className={styles.cardSupport}>
                <img src={imgCard} className={styles.img} alt='imgCard' />
                <div className={styles.cardContent}>
                  <h4 className={styles.titleCard}>{nameMedthod}</h4>
                  <Link href={link} passHref={true}>
                    <a className={styles.descriptionCard}>{description}</a>
                  </Link>
                </div>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}
