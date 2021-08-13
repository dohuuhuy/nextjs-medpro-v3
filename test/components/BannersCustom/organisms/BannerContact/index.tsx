import Container from '../../../Container'
import { Layout, Row } from 'antd'
import React from 'react'
import CardContact from './CardContact'
import styles from './styles.module.less'

const { Content } = Layout

export const BannerContact = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }
  const { title, subTitle, imageBackground, details }: any = getBanner

  return (
    <Content
      className={styles.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <Container className={styles.containerBanner}>
        <Row className={styles.rowLabel}>
          <h1 className={styles.title}>
            <span className={styles.textTitle}>{title}</span>
          </h1>

          <p
            className={styles.subTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </Row>
        <Row className={styles.rowOption}>
          <CardContact cardContact={details} />
        </Row>
      </Container>
    </Content>
  )
}
