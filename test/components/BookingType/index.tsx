import { Col, Rate, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import Container from '../Container'
import { Icon } from '../Icon'
import { BookingTypeIF } from './interface'
import styles from './styles.module.less'
import { carousel, listTabs, settings } from './utils'

export const BookingType = (props: BookingTypeIF) => {
  const info = props?.getInfo || null
  const [act, setact] = React.useState(1)

  const checkTab = (e: any) => {
    return Number(e) === Number(act) ? '' : styles.dnone
  }

  return (
    <Container className={styles.bookingType}>
      {/* banner và tabs header */}
      <Row className={styles.rowType}>
        <Col
          className={styles.colType}
          span='24'
          style={{ backgroundImage: `url(${banner(info?.partnerId)})` }}
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
                <Rate />
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
      {/* nội của tabs */}
      <Row className={styles.rowContent}>
        <Col className={styles.colContent} span='24'>
          <div className={cx(styles.tab_Intro, checkTab(0))}>
            <p>đây la giới thiệu của UMC</p>
          </div>

          <div className={cx(styles.tab_Type, checkTab(1))}>
            <ul className={styles.listType}>
              {info.features.map((v) => {
                return (
                  <li key={uniqueId()}>
                    <Link
                      href={
                        v?.webRoute ? `/${info.partnerId}${v?.webRoute}` : '#'
                      }
                    >
                      <a>
                        <div className={styles.card}>
                          <figure>
                            <Image
                              src={v?.image}
                              width='80'
                              height='80'
                              layout='responsive'
                              alt=''
                            />
                          </figure>
                          <span>{v?.name}</span>
                        </div>
                      </a>
                    </Link>
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
      {/* carousel banner  */}
      <Row className={styles.rowSlider}>
        <Col className={styles.colSilder} span='24'>
          <Slider {...settings} className={styles.Slider}>
            {carousel?.map((e) => {
              return (
                <div key={uniqueId()} className={styles.card}>
                  <Image
                    src={e?.image}
                    alt=''
                    width={1110}
                    height={335}
                    objectFit='cover'
                  />
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

// tạm thời dùng link này , sao này sử bannerimage trong info
const banner = (e: string) => {
  return `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png`
}
