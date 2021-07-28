import { Col, Row } from 'antd'
import { filter } from 'lodash'
import React from 'react'
import { BenefitLeft } from './BenefitLeft'
import style from './style.module.less'

import { BenefitRight } from './BenefitRight'

interface Content {
  imgMobile: string
  listBenefit: any[]
}

export const ListBenefit = ({ listBenefit, imgMobile }: Content) => {
  const rightListBenefit = filter(listBenefit, { position: 'right' })
  const leftListBenefit = filter(listBenefit, { position: 'left' })

  return (
    <Row className={style.ListBenefit}>
      <Col xl={7} md={6} className={style.colBenefitLeft}>
        <BenefitLeft leftListBenefit={leftListBenefit} />
      </Col>
      <Col xl={10} md={12} className={style.slideMobileCol}>
        <figure className={style.slideMobile}>
          <img src={imgMobile} alt='' />
        </figure>
      </Col>
      <Col xl={7} md={6} className={style.colBenefitRight}>
        <BenefitRight rightListBenefit={rightListBenefit} />
      </Col>
    </Row>
  )
}
