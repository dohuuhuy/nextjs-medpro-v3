import { Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import style from './styles.module.less'

export const BannerDefault = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }

  const { title, subTitle, imageBackground }: any = getBanner

  return (
    <div
      className={style.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <Container>
        <Row>
          <h1 className={style.title}>{title}</h1>
          <p
            className={style.subTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </Row>
      </Container>
    </div>
  )
}
