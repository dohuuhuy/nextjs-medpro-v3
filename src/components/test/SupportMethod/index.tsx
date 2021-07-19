import React from 'react'
import style from './style.module.less'
import { Layout, Col } from 'antd'
import {
  SupportMedthodApp,
  SupportMethodItem
} from '@components/organisms/SupportMethodApp'

const { Content } = Layout

interface SupportMethod {
  dataSupportMethod: SupportMedthodApp
}

export const SupportMethod = ({ dataSupportMethod }: SupportMethod) => {
  if (!dataSupportMethod) {
    return <em>Lỗi không nhận được dataSupportMethod đầu vào</em>
  }
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
              ({
                nameMedthod,
                imgCard,
                description,
                link
              }: SupportMethodItem) => (
                <div>
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
