/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import { isEmpty } from 'lodash'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import Container from '../Container'
import { DeloyHospital } from './SliderHospital.interface'
import styles from './style.module.less'

interface DeloyHospitalCustom {
  dataDeloyHospital: DeloyHospital
}

export const DeloyHospitalCustom = ({
  dataDeloyHospital
}: DeloyHospitalCustom) => {
  if (!dataDeloyHospital || isEmpty(dataDeloyHospital))
    return <em>Lỗi dataDeloyHospital</em>

  const settings: Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          dots: true,
          infinite: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          infinite: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          infinite: false,
          arrows: false
        }
      }
    ]
  }

  return (
    <Container className={styles.DeloyHospitalCustom}>
      <Row className={styles.rowTitle}>
        <h2 className={styles.title}>Hệ thống bệnh viện triển khai</h2>
      </Row>
      <Row className={styles.rowSlider}>
        <style>{cssstyle}</style>
        <Col>
          <Slider {...settings} className={styles.Slider}>
            {dataDeloyHospital?.map(({ nameHospital, image, imgLink }: any) => {
              return (
                <div key={nameHospital} className={styles.card}>
                  <figure className={styles.view}>
                    <img src={image} alt={image} />
                  </figure>
                  <div className={styles.cardBody}>
                    <a href={imgLink} target='_blank' rel='noreferrer'>
                      {nameHospital}
                    </a>
                  </div>
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
