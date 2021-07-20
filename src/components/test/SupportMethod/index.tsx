import { SupportMethod } from './SupportMethod.interface'
import { Col, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'
import style from './style.module.less'

const { Content } = Layout

interface SupportMedthodCustom {
  dataSupportMethod: SupportMethod
}

export const SupportMedthodCustom = ({
  dataSupportMethod
}: SupportMedthodCustom) => {
  if (!dataSupportMethod) {
    return <em>lỗi data input</em>
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
            {dataSupportMethod?.map(
              (
                { nameMedthod, imgCard, description, link }: any,
                index: number
              ) => (
                <Col className={style.colSupport} key={index}>
                  <Col className={style.cardSupport}>
                    <img src={imgCard} className={style.img} alt='imgCard' />
                    <p className={style.titleCard}>{nameMedthod}</p>
                    <Link href={link}>
                      <a>
                        <p className={style.selectSupport}>{description}</p>
                      </a>
                    </Link>
                  </Col>
                </Col>
              )
            )}
          </div>
        </Content>
      </Content>
    </React.Fragment>
  )
}
