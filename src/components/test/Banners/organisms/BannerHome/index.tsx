/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import Container from '../../../Container'
import style from './style.module.less'

export const BannerHome = ({ getBanner, listFeature }: any) => {
  if (!getBanner) {
    return <em> Không có dataBannerHome</em>
  }
  const { imageBackground } = getBanner

  return (
    <div className={style.BannerHome}>
      <div
        className={style.backgroundImage}
        style={{
          backgroundImage: imageBackground && `url(${imageBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%'
        }}
      />
      <Container className={style.contentBannerHome}>
        <Row className={style.boxService}>
          <Col span={24} sm={24} xl={24} md={24} className={style.ColTitle}>
            <h1>CHỌN DỊCH VỤ</h1>
          </Col>
          <Col span={24} sm={24} xl={24} md={24} className={style.ColBoxServic}>
            <ul className={style.listBoxService}>
              {listFeature.map(({ name, image, status }: any, i: number) => {
                if (status) {
                  return (
                    <li key={i}>
                      <Link href='/'>
                        <a>
                          <img src={image} alt='dịch vụ' />
                          <p>{name}</p>
                        </a>
                      </Link>
                    </li>
                  )
                } else {
                  return null
                }
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
