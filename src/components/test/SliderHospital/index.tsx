/* eslint-disable @next/next/no-img-element */
import { Row } from 'antd'
import React from 'react'
import Slider from 'react-slick'
import Container from '../Container'
import { DeloyHospital } from './SliderHospital.interface'
import styles from './style.module.less'

interface DeloyHospitalCustom {
  dataDeloyHospital: DeloyHospital
}

export const DeloyHospitalCustom = ({
  dataDeloyHospital
}: DeloyHospitalCustom) => {
  if (!dataDeloyHospital) return <em>Lỗi dataDeloyHospital</em>

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1198,
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
        breakpoint: 576,
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
      <Row className={styles.boxSlider}>
        <Slider {...settings} className={styles.Slider}>
          {dataDeloyHospital?.map(({ nameHospital, image, imgLink }: any) => {
            return (
              <div key={nameHospital}>
                <div className={styles.listCard}>
                  <div className={styles.card}>
                    <span>
                      <img src={image} alt={image} />
                    </span>
                    <div className={styles.text}>
                      <a href={imgLink} target='_blank' rel='noreferrer'>
                        {nameHospital}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </Row>
    </Container>
  )
}
