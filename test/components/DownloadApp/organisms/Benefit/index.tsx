import { Col, Row } from 'antd'
import { filter } from 'lodash'
import Image from 'next/image'
import React from 'react'
import { BenefitLeft } from '../../molecules/BenefitLeft'
import { BenefitRight } from '../../molecules/BenefitRight'
import style from './style.module.less'

interface Content {
  imgMobile: string
  listBenefit: any[]
}

export const Benefit = ({ listBenefit, imgMobile }: Content) => {
  const rightListBenefit = filter(listBenefit, { position: 'right' })
  const leftListBenefit = filter(listBenefit, { position: 'left' })

  return (
    <Row className={style.ListBenefit}>
      <Col xl={7} md={6} className={style.colBenefitLeft}>
        <BenefitLeft leftListBenefit={leftListBenefit} />
      </Col>
      <Col
        xl={10}
        lg={10}
        md={12}
        sm={24}
        xs={24}
        className={style.slideMobileCol}
      >
        <figure className={style.slideMobile}>
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
      <Col xl={7} md={6} className={style.colBenefitRight}>
        <BenefitRight rightListBenefit={rightListBenefit} />
      </Col>
    </Row>
  )
}
