import { Col, Row } from 'antd'
import { motion } from 'framer-motion'
import Image from 'next/image'
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

  const SelectFeature = (type: string) => () => {
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
              {listFeature.map((e, i: any) => {
                const imageErrorSrc = '/images/error.svg'
                const urlImage = e.image || imageErrorSrc

                if (e?.status) {
                  return (
                    <motion.li
                      key={i}
                      variants={mLi}
                      onClick={SelectFeature(e?.type)}
                      whileHover={{
                        scale: 1.2,
                        opacity: 1
                      }}
                      whileFocus={{
                        scale: 1.2,
                        opacity: 1
                      }}
                      transition={{ stiffness: 300 }}
                    >
                      <div className={styles.card}>
                        <figure>
                          <Image
                            src={urlImage}
                            width='45'
                            height='45'
                            loading='eager'
                            alt='icon'
                          />
                        </figure>
                        <p>{e?.name}</p>
                      </div>
                    </motion.li>
                  )
                }
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
