import { Col, Row } from 'antd'
import { filter } from 'lodash'
import Image from 'next/image'
import React from 'react'
import { BenefitLeft } from '../../molecules/BenefitLeft'
import { BenefitRight } from '../../molecules/BenefitRight'
import styles from './styles.module.less'

interface Content {
  imgMobile: string
  listBenefit: any[]
}

export const Benefit = ({ listBenefit, imgMobile }: Content) => {
  const rightListBenefit = filter(listBenefit, { position: 'right' })
  const leftListBenefit = filter(listBenefit, { position: 'left' })

  return (
    <Row className={styles.ListBenefit}>
      <Col xl={7} md={6} className={styles.colBenefitLeft}>
        <BenefitLeft leftListBenefit={leftListBenefit} />
      </Col>
      <Col
        xl={10}
        lg={10}
        md={12}
        sm={24}
        xs={24}
        className={styles.slideMobileCol}
      >
        <figure className={styles.slideMobile}>
          {/* <img src={imgMobile} alt='' /> */}
          <Image
            src={imgMobile}
            width='400'
            height='800'
            layout='responsive'
            loading='eager'
          />
        </figure>
      </Col>
      <Col xl={7} md={6} className={styles.colBenefitRight}>
        <BenefitRight rightListBenefit={rightListBenefit} />
      </Col>
    </Row>
  )
}
