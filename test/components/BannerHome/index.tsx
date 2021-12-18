import { Col, Row } from 'antd'
// import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export interface BannerHomeIF {
  getBanner: any
  listFeature: ListFeature[]
  partnerId: string
}

interface ListFeature {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}

export const BannerHome = ({
  getBanner,
  listFeature,
  partnerId
}: BannerHomeIF) => {
  const router = useRouter()

  const [state, setstate] = React.useState({
    list: listFeature,
    activeTab: 1
  })

  React.useEffect(() => {
    const handleResize = () => {
      let missItem = 0
      const width = window.innerWidth
      const numColumn = width > 425 ? 4 : 3
      const lengthItem = listFeature.length
      if ((lengthItem + 1) % numColumn === 0) {
        missItem = 1
      }
      if ((lengthItem + 2) % numColumn === 0) {
        missItem = 2
      }
      if ((lengthItem + 3) % numColumn === 0) {
        missItem = 3
      }

      const missItemArr: any = [...Array(missItem).keys()]

      const list = listFeature
        .sort((a, b) => a.priority - b.priority)
        .concat(missItemArr)

      setstate((prev) => ({ ...prev, list: list }))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!getBanner) {
    return null
  }

  const SelectFeature = (type: string) => () => {
    if (partnerId === 'medpro' && type === 'booking.date') {
      router.push('/benh-vien')
    }
  }

  return (
    <section className={styles.BannerHome}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: getBanner && `url(${getBanner})`
        }}
      />
      <Container className={styles.contentBannerHome}>
        <Row className={styles.rowboxService}>
          <Col span={24} className={styles.colTitle}>
            <h1 className={styles.title}>CHỌN DỊCH VỤ</h1>
          </Col>
          <Col span={24} className={styles.colBoxService}>
            <ul className={styles.listBoxService}>
              {state.list?.map((item, i) => {
                const imgError = require('./images/error.svg')

                const size = 45
                const propsImg = {
                  src: item.image || imgError,
                  width: size,
                  height: size,
                  onError: (e: any) => (e.target.src = imgError)
                }

                const checkItem =
                  Object.keys(item).length < 1 ? styles.nonHover : ''

                return (
                  <li
                    key={i}
                    onClick={SelectFeature(item?.type)}
                    className={checkItem}
                  >
                    <div className={styles.card}>
                      {item.image && (
                        <figure>
                          <img {...propsImg} alt='' />
                        </figure>
                      )}
                      <p className={styles.name}>{item?.name}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
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

export const methodLi = {
  variants: mLi,
  whileHover: {
    scale: 1.03,
    opacity: 1
  },
  transition: { stiffness: 900 }
}
