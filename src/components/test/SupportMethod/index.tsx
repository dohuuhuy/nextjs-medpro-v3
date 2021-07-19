import { Col, Layout } from 'antd'
import React from 'react'
import style from './style.module.less'

const { Content } = Layout

interface SupportMethod {
  dataSupportMethod: any
}

export const SupportMedthodCustom = ({ dataSupportMethod }: SupportMethod) => {
  return (
    <React.Fragment>
      <Content className={style.viewContent}>
        <Content className={style.content}>
          <div className={style.subTitle}>
            <p>Hỗ trợ</p>
            <h1>Các hình thức hỗ trợ</h1>
          </div>

          <div className={style.viewSupport}>
            {dataSupportMethod.map(
              (
                { nameMedthod, imgCard, description, link }: any,
                index: number
              ) => (
                <div key={index}>
                  <Col className={style.colSupport}>
                    <Col className={style.cardSupport}>
                      <img src={imgCard} className={style.img} />
                      <p className={style.titleCard}>{nameMedthod}</p>
                      <a href={link}>
                        <p className={style.selectSupport}>{description}</p>
                      </a>
                    </Col>
                  </Col>
                </div>
              )
            )}
          </div>
        </Content>
      </Content>
    </React.Fragment>
  )
}
