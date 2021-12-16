import { Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'

export const BannerHomeMobile = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.rowBanner}>
        <Col className={styles.colAccount}>
          <p>
            <strong>Medpro</strong> xin chào,
            <br />PHAN HAI SON
          </p>
        </Col>
        <Col className={styles.colLogo}>
          <Image src="/images/LogoMedpro.svg" alt='' width={180} height={180} />
        </Col>
      </Row>
    </div>
  )
}

