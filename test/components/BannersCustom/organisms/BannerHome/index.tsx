import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../../../Container'
import style from './style.module.less'

export const BannerHome = ({
  getBanner,
  listFeature,
  // partnerId,
  appId,
  dispatchListHospital
}: any) => {
  const router = useRouter()

  if (!getBanner) {
    return <em> Không có dataBannerHome</em>
  }
  const { imageBackground } = getBanner

  const SelectFeature = (type: string) => {
    const { checkData } = require('./../../../DataFailure')

    if (appId === 'medpro' && checkData(type)) {
      dispatchListHospital()
      router.push('/chon-benh-vien')
    }
  }

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
              {listFeature.map(
                ({ name, image, status, type }: any, i: number) => {
                  const imageErrorSrc = '/images/error.svg'
                  const urlImage = image || imageErrorSrc
                  const onError = (e: any) => {
                    e.target.src = imageErrorSrc
                  }
                  if (status) {
                    return (
                      <li key={i} onClick={() => SelectFeature(type)}>
                        <a>
                          <img src={urlImage} onError={onError} />
                          <p>{name}</p>
                        </a>
                      </li>
                    )
                  } else {
                    return null
                  }
                }
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export type BannerHome = Array<BannerHomeItem>

export interface BannerHomeItem {
  id: string
  linkImage: string
  alt: string
}
