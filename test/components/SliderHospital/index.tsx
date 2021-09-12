import { Col, Row } from 'antd'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import Container from '../Container'
import { checkData, DataFailure } from '../DataFailure'
import styles from './styles.module.less'
import Image from 'next/image'
interface Props {
  dataDeloyHospital: DeloyHospitalItem[]
}

export interface DeloyHospitalItem {
  id: string
  nameHospital: string
  image: string
  imgLink: string
}

export const DeloyHospitalCustom = ({ dataDeloyHospital }: Props) => {
  if (checkData(dataDeloyHospital)) {
    return <DataFailure desc={'Lỗi không có data dataDeloyHospital'} />
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
                    <Image
                      src={image}
                      alt={image}
                      width={355}
                      height={212}
                      objectFit='cover'
                      layout='intrinsic'
                    />
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

export const settings: Settings = {
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
