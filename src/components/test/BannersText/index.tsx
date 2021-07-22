import React from 'react'
import Container from '../Container'
import style from './styles.module.less'

export const BannersText = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }

  console.log('getBanner :>> ', getBanner)

  const { title, subTitle, imageBackground, details, key }: any = getBanner

  return (
    <div
      className={style.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <Container>
        <h1 className={style.title}>
          <span className={style.textTitle}>{title || ''}</span>
        </h1>

        <b
          className={style.subTitle}
          dangerouslySetInnerHTML={{ __html: subTitle || '' }}
        />
      </Container>
    </div>
  )
}
