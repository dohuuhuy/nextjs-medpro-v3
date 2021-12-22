import { Col, Rate, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import Slider, { Settings } from 'react-slick'
import { Icon } from '../Icon'
import Container from './../Container'
import { BookingTypeIF } from './common/interface'
import { banner, listTabs } from './common/utils'
import styles from './styles.module.less'

export const BookingType = (props: BookingTypeIF) => {
  const dispatch = useDispatch()
  const info = props?.getInfo

  const [state, setstate] = React.useState({
    list: info.features,
    activeTab: 1
  })

  React.useEffect(() => {
    const handleResize = () => {
      let missItem = 0
      const width = window.innerWidth
      const numColumn = width < 760 ? 3 : 4
      const lengthItem = info.features.length
      const list = info.features

      for (let i = 1; i <= 3; i++) {
        if ((lengthItem + i) % numColumn === 0) {
          missItem = i
        }
      }

      const missItemArr: any = [...Array(missItem).keys()]
      const y = list.concat(missItemArr)
      const x = width > 760 && y.length < 8 ? 8 - y.length : 0
      const z: any = [...Array(x).keys()]
      setstate((prev) => ({ ...prev, list: y.concat(z) }))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const checkTab = (e: any) => {
    return Number(e) === Number(state.activeTab) ? '' : styles.dnone
  }

  const onclickFeature = (item: any) => () => {
    dispatch(props.selectedFeature(item))
  }
  const onSelectTab = (id: any) => () => {
    setstate((prev) => ({ ...prev, activeTab: Number(id) }))
  }

  return (
    <Container tag='section' className={styles.bookingType}>
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
                <p className={styles.website}>
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
            {listTabs.map((item, i) => {
              const active = state.activeTab === i ? styles.active : ''

              return (
                <li key={i} className={active} onClick={onSelectTab(i)}>
                  {item?.title}
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
              {state.list.map((item) => {
                const direct = item?.webRoute
                  ? `/${info.partnerId}${item?.webRoute}`
                  : '#'

                const iconError = require('./common/images/iconDatKham.svg')

                const size = 80
                const propsImg = {
                  src: item?.image || iconError,
                  width: size,
                  height: size,
                  onError: (e: any) => (e.target.src = iconError)
                }

                const checkItem =
                  Object.keys(item).length < 1 ? styles.nonHover : ''

                return (
                  <li
                    key={uniqueId()}
                    onClick={onclickFeature(item)}
                    className={cx(styles.child, checkItem)}
                  >
                    <Link href={direct}>
                      <a>
                        <div className={styles.card}>
                          {item?.image && (
                            <figure>
                              <img {...propsImg} alt='' />
                            </figure>
                          )}{' '}
                          <span>{item?.name}</span>
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
        <Col>
          <Slider {...settings} className={styles.Slider}>
            {props.deployHospital?.map(({ nameHospital, image }: any) => {
              return (
                <div key={nameHospital} className={styles.card}>
                  <figure className={styles.view}>
                    <Image
                      loading='eager'
                      property='true'
                      loader={myLoader}
                      src={image}
                      alt={image}
                      width={1110}
                      height={335}
                      objectFit='cover'
                      layout='intrinsic'
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

export const settings: Settings = {
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false
}

export const myLoader = ({ src, width, quality }: any): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}
