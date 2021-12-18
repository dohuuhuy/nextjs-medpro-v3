import { Col, Row } from 'antd'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { Banner } from '../BannersCustom/interface'
import Container from '../Container'
import styles from './styles.module.less'

export const BannerHome = ({ getBanner, listFeature, partnerId }: Banner) => {
  const router = useRouter()

  if (!getBanner) {
    return null
  }

  const SelectFeature = (type: string) => () => {
    if (partnerId === 'medpro' && type === 'booking.date') {
      router.push('/benh-vien')
    }
  }

  return (
    <div className={styles.BannerHome}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: getBanner && `url(${getBanner})`
        }}
      />
      <Container className={styles.contentBannerHome}>
        <Row className={styles.boxService}>
          <Col span={24} className={styles.ColTitle}>
            <h1>CHỌN DỊCH VỤ</h1>
          </Col>
          <Col span={24} className={styles.ColBoxServic}>
            <motion.ul
              className={styles.listBoxService}
              variants={mUl}
              initial='hidden'
              animate='visible'
            >
              {listFeature?.map((item, i: any) => {
                const imgError = require('./images/error.svg')

                const size = 45
                const propsImg = {
                  src: item.image || imgError,
                  width: size,
                  height: size,
                  onError: (e: any) => (e.target.src = imgError)
                }

                return (
                  <motion.li
                    key={i}
                    {...methodLi}
                    onClick={SelectFeature(item?.type)}
                  >
                    <div className={styles.card}>
                      <figure>
                        <img {...propsImg} alt='' />
                      </figure>
                      <p className={styles.name}>{item?.name}</p>
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
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

export const mUl = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const mLi = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const methodLi = {
  variants: mLi,
  whileHover: {
    scale: 1.03,
    opacity: 1
  },
  transition: { stiffness: 900 }
}
