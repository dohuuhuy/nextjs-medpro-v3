import Container from '@componentsTest/Container'
import { Icon } from '@componentsTest/Icon'
import { Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import styles from './styles.module.less'

export const BookingType = (props: BookingType) => {
  const info = props?.getInfo || null

  console.log(`info`, info)

  const [act, setact] = React.useState(1)

  const checkTab = (e: any) => {
    return Number(e) === Number(act) ? '' : styles.dnone
  }

  return (
    <Container className={styles.bookingType}>
      <Row className={styles.rowType}>
        <Col
          className={styles.colType}
          span='24'
          style={{ backgroundImage: `url(${info?.bannerImage})` }}
        >
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <figure className={styles.cardView}>
                <Image src={info?.image} alt='icon' width='104' height='104' />
              </figure>
              <div className={styles.cardBody}>
                <h3 className={styles.nameHospital}>{info?.name}</h3>
                <p className={styles.address}>Địa chỉ: {info?.address}</p>
                <p>
                  Website: <a>{info.domain}</a>
                </p>
              </div>
              <div className={styles.groupIcon}>
                <button className={styles.btnIcon}>
                  <Icon name='yeuthich' fill='#FFB340' />
                </button>
                <button className={styles.btnIcon}>
                  <Icon name='chiase' fill='#FFB340' />
                </button>
                <button className={styles.btnIcon}>
                  <Icon name='diachi' fill='#FFB340' />
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col className={styles.colTab} span='24'>
          <ul className={styles.listTab}>
            {listTabs.map((v, i: number) => {
              const onTab = (e: any) => {
                const id = e.target.dataset.id
                setact(Number(id))
              }
              const active = act === i ? styles.active : ''

              return (
                <li key={i} data-id={i} className={active} onClick={onTab}>
                  {v.title}
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>

      <Row className={styles.rowContent}>
        <Col className={styles.colContent} span='24'>
          <div className={cx(styles.tab_Intro, checkTab(0))}>
            <p>đây la giới thiệu của UMC</p>
          </div>

          <div className={cx(styles.tab_Type, checkTab(1))}>
            <ul className={styles.listType}>
              {info.features.map((e) => {
                return (
                  <li key={uniqueId()}>
                    <div className={styles.card}>
                      <figure>
                        <Image src={e.image} width='80' height='80' alt='' />
                      </figure>
                      <span>{e.name}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={cx(styles.tab_Comment, checkTab(2))}>
            <p>đây la đánh giá của UMC</p>
          </div>
        </Col>
      </Row>

      <Row className={styles.rowSlider}>
        <Col className={styles.colType} span='24'>
          <Slider {...settings} className={styles.Slider}>
            {carousel?.map((e) => {
              return (
                <div key={uniqueId()} className={styles.card}>
                  <figure className={styles.view}>
                    <Image
                      src={e.image}
                      alt=''
                      width={1110}
                      height={335}
                      objectFit='cover'
                    />
                  </figure>
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

const carousel = [
  {
    image: '/images/bookingType/slide.png'
  }
]

const listTabs = [
  {
    id: 1,
    title: 'Giới thiệu'
  },
  { id: 2, title: 'Dịch vụ' },
  {
    id: 3,
    title: 'Đánh giá'
  }
]

export const settings: Settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
}

export interface BookingType {
  getInfo: {
    image: string
    bannerImage: string
    name: string
    address: string
    domain: string
    features: {
      children: []
      createdAt: '2020-07-09T01:59:01.275Z'
      disabled: false
      id: '5f0679e5672b040019c7d4d3'
      image: 'https://medpro-api-v2-testing.medpro.com.vn/st/feature/dv4.svg'
      message: ''
      mobileStatus: true
      name: 'Thanh toán Viện phí'
      priority: 1
      status: true
      type: 'payment.fee'
      updatedAt: '2020-07-09T01:59:01.275Z'
      webStatus: false
    }[]
  }
}
