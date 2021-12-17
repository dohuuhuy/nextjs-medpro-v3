import { Col, Input, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'
import Container from '@componentsTest/Container'
import { Icon } from '../Icon'

export const BannerHomeMobile = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.rowBanner}>
        <Col className={styles.colAccount}>
          <p className={styles.account}>
            <span className={styles.hello}>
              <b>Medpro </b>
              xin chào,
            </span>
            <span className={styles.name}>
              PHAN HAI SON
            </span>
          </p>
        </Col>
        <Col className={styles.colLogo}>
          <Image src="/images/LogoMedpro.svg" alt='' width={150} height={150} />
        </Col>
      </Row>
      <Row className={styles.rowSearch}>
        <Col className={styles.colSearch}>
          <Input
            size='large'
            autoFocus={true}
            className={styles.inputSearch}
            placeholder='Tìm nhanh bệnh viện'
            prefix={<Icon name='timkiem' fill='white' />}
            allowClear={true}
          />
        </Col>
      </Row>
    </Container>
  )
}

