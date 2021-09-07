import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../../../Container'
import { Banner } from './../../interface'
import styles from './styles.module.less'

export const BannerHome = ({ getBanner, listFeature, partnerId }: Banner) => {
  const router = useRouter()

  if (!getBanner) {
    return <em> Không có dataBannerHome</em>
  }
  const { imageBackground } = getBanner

  const SelectFeature = (type: string) => {
    if (partnerId === 'medpro' && type === 'booking.date') {
      router.push('/chon-benh-vien')
    }
  }

  return (
    <div className={styles.BannerHome}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: imageBackground && `url(${imageBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%'
        }}
      />
      <Container className={styles.contentBannerHome}>
        <Row className={styles.boxService}>
          <Col span={24} sm={24} xl={24} md={24} className={styles.ColTitle}>
            <h1>CHỌN DỊCH VỤ</h1>
          </Col>
          <Col
            span={24}
            sm={24}
            xl={24}
            md={24}
            className={styles.ColBoxServic}
          >
            <ul className={styles.listBoxService}>
              {listFeature.map((e, i: any) => {
                const imageErrorSrc = '/images/error.svg'
                const urlImage = e.image || imageErrorSrc
                const onError = (e: any) => {
                  e.target.src = imageErrorSrc
                }
                if (e?.status) {
                  return (
                    <li key={i} onClick={() => SelectFeature(e?.type)}>
                      <a>
                        <figure>
                          <img src={urlImage} onError={onError} />
                        </figure>
                        <p>{e?.name}</p>
                      </a>
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

export type BannerHome = BannerHomeItem[]

export interface BannerHomeItem {
  id: string
  linkImage: string
  alt: string
}
