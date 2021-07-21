/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from './style.module.less'
import { BannerHome } from './BannerHome.interface'
import Container from '../Container'
import Link from 'next/link'
import { Col, Row } from 'antd'

interface bannerHomeCustom {
  dataBannerHome: BannerHome
}
const BannerHomeCustom = ({ dataBannerHome }: bannerHomeCustom) => {
  console.log(dataBannerHome)

  if (!dataBannerHome) {
    return <em> Không có dataBannerHome</em>
  }

  return (
    <div className={style.BannerHome}>
      <div
        className={style.backgroundImage}
        style={{
          backgroundImage: `url(${dataBannerHome[0].linkImage})`,
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
              <li>
                <Link href='/'>
                  <a>
                    <img
                      src={
                        'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'
                      }
                      alt='boxService'
                    />
                    <p>Đặt khám</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <img
                      src={
                        'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'
                      }
                      alt='boxService'
                    />
                    <p>Đặt khám</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <img
                      src={
                        'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'
                      }
                      alt='boxService'
                    />
                    <p>Đặt khám</p>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default BannerHomeCustom
