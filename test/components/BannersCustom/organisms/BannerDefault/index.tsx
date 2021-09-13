import { Row } from 'antd'
import { motion } from 'framer-motion'
import React from 'react'
import Container from '../../../Container'
import styles from './styles.module.less'

export const BannerDefault = ({ getBanner }: any) => {
  if (!getBanner) {
    return null
  }

  const { title, subTitle, imageBackground }: any = getBanner

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className={styles.viewBanner}
      style={{
        backgroundImage: imageBackground && `url(${imageBackground})`
      }}
    >
      <Container>
        <Row>
          <motion.h1 variants={fadeInUp} className={styles.title}>
            <span className={styles.textTitle}>{title}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className={styles.subTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </Row>
      </Container>
    </motion.div>
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
