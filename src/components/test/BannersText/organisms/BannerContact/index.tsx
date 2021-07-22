import Container from './../../../Container'
import { Layout, Row } from 'antd'
import React from 'react'
import CardContact from './CardContact'
import style from './styles.module.less'

const { Content } = Layout

export const BannerContact = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }
  const { title, subTitle, imageBackground, details }: any = getBanner

  return (
    <Content
      className={style.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <Container className={style.containerBanner}>
        <Row className={style.rowLabel}>
          <h1 className={style.title}>
            <span className={style.textTitle}>{title}</span>
          </h1>

          <p
            className={style.subTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </Row>
        <Row className={style.rowOption}>
          <CardContact cardContact={details} />
        </Row>
      </Container>
    </Content>
  )
}
