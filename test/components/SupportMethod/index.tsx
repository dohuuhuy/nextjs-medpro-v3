import { Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { checkData, DataFailure } from '../DataFailure'
import styles from './styles.module.less'
import { SupportMethod } from './SupportMethod.interface'

export interface SupportMedthodCustom {
  dataSupportMethod: SupportMethod
}

export const SupportMedthodCustom = ({
  dataSupportMethod
}: SupportMedthodCustom) => {
  if (checkData(dataSupportMethod)) {
    return <DataFailure desc={'Lỗi không có data hỗ trợ'} />
  }

  return (
    <Container className={styles.supportMedthod}>
      <Row className={styles.rowSupport}>
        <span className={styles.title}>Hỗ trợ</span>
        <h2 className={styles.subTitle}>Các hình thức hỗ trợ</h2>
      </Row>
      <Row className={styles.listSupportRow}>
        {dataSupportMethod?.map((e, index: number) => (
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
              <Image
                src={e?.imgCard}
                className={styles.img}
                alt='imgCard'
                width={80}
                height={80}
              />
              <div className={styles.cardContent}>
                <h4 className={styles.titleCard}>{e?.nameMedthod}</h4>
                <Link href={e?.link} passHref={true}>
                  <a className={styles.descriptionCard}>{e?.description}</a>
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
