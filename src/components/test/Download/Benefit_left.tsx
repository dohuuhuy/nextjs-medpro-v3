import React from 'react'
import Styles from './style.module.less'
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'

interface Benefit_left {
  listBenefit: Item[]
}
interface Item {
  id: any
  title: string
  description: string
  imgBenefit: string
  position: string
}
// var classLeft = [Styles.list_item, Styles.left]
export const Benefit_left = ({ listBenefit }: Benefit_left) => {
  return (
    <React.Fragment>
      <Col span={7} className={Styles.list}>
        {listBenefit.map(
          ({ id, title, description, imgBenefit, position }: Item) => (
            <div>
              {position === 'left' ? (
                <Row
                  key={id}
                  className={[Styles.list_item, Styles.left].join(' ')}
                >
                  <div className={Styles.img_small}>
                    <img src={imgBenefit} />
                  </div>
                  <div className={Styles.list_content}>
                    <p className={Styles.list_title}>{title}</p>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </Row>
              ) : undefined}
            </div>
          ),
        )}
      </Col>
    </React.Fragment>
  )
}
