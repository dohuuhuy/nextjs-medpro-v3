import React from 'react'
import Styles from './style.module.less'
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'

interface BenefitLeft {
  listBenefit: BenefitLeftItem[]
}
interface BenefitLeftItem {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: string
}
export const Benefit_left = ({ listBenefit }: BenefitLeft) => {
  const listBenefitLeft = listBenefit.filter(
    ({ position }: BenefitLeftItem) => position === 'left'
  )
  return (
    <React.Fragment>
      <Col span={7} className={Styles.list}>
        {listBenefitLeft.map(
          ({ id, title, description, imgBenefit }: BenefitLeftItem) => (
            <div>
              <Row
                key={id}
                className={[Styles.list_item, Styles.left].join(' ')}
              >
                <div className={Styles.img_small}>
                  <img src={imgBenefit} alt='' />
                </div>
                <div className={Styles.list_content}>
                  <p className={Styles.list_title}>{title}</p>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </Row>
            </div>
          )
        )}
      </Col>
    </React.Fragment>
  )
}
