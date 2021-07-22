import React from 'react'
import Container from '../Container'
import { PropsBanner } from './banner.interface'
import style from './styles.module.less'

const Banner = ({ dataBanner }: PropsBanner) => {
  const { title, subTitle, imageBackground }: any = dataBanner

  return (
    <div
      className={style.viewBanner}
      style={{
        minHeight: title ? 250 : undefined,
        backgroundImage: imageBackground
          ? 'url("' + imageBackground + '")'
          : undefined
      }}
    >
      <Container>
        {title ? (
          <h1 className={style.title}>
            <span className={style.textTitle}>{title}</span>
          </h1>
        ) : undefined}
        {subTitle ? (
          <b
            className={style.subTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        ) : undefined}
      </Container>
    </div>
  )
}

export default Banner
