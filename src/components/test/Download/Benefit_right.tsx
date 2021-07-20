import React from 'react'
import Styles from './style.module.less'
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'

interface BenefitRight {
  listBenefit: BenefitRightItem[]
}
interface BenefitRightItem {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: any
}
// var classLeft = [Styles.list_item, Styles.left]
export const Benefit_right = ({ listBenefit }: BenefitRight) => {
  const listBenefitRight = listBenefit.filter(
    ({ position }: BenefitRightItem) => position === 'right'
  )
  return (
    <React.Fragment>
      <Col span={7} className={Styles.list}>
        {listBenefitRight.map(
          ({ id, title, description, imgBenefit }: BenefitRightItem) => (
            <div>
              <Row
                key={id}
                className={[Styles.list_item, Styles.right].join(' ')}
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
