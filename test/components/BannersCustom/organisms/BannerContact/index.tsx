import { Row } from 'antd'
import { motion } from 'framer-motion'
import React from 'react'
import Container from '../../../Container'
import { CardContact } from './CardContact'
import styles from './styles.module.less'

export const BannerContact = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }
  const { title, subTitle, imageBackground, details }: any = getBanner

  return (
    <Container
      fluid={true}
      className={styles.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <Container className={styles.containerBanner}>
          <Row className={styles.rowLabel}>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              <span className={styles.textTitle}>{title}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={styles.subTitle}
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          </Row>
          <Row className={styles.rowOption}>
            <CardContact cardContact={details} />
          </Row>
        </Container>
      </motion.div>
    </Container>
  )
}

const easing = [0.6, -0.05, 0.01, 0.99]

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}
