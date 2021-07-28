/* eslint-disable @next/next/no-img-element */
import { getListHospital } from '@actionStore/rootAction'
import { check } from '@utils/checkValue'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import Container from '../../../Container'
import style from './style.module.less'

export const BannerHome = ({
  getBanner,
  listFeature,
  partnerId,
  appId
}: any) => {
  const router = useRouter()

  const dispatch = useDispatch()

  if (!getBanner) {
    return <em> Không có dataBannerHome</em>
  }
  const { imageBackground } = getBanner

  const selectFeature = (type: any) => {
    if (appId === 'medpro' && check(type)) {
      dispatch(getListHospital())
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

                  if (status) {
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          selectFeature(type)
                        }}
                      >
                        <img
                          src={urlImage}
                          onError={(e: any) => {
                            e.target.src = imageErrorSrc
                          }}
                          alt='dịch vụ'
                        />
                        <p>{name}</p>
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
