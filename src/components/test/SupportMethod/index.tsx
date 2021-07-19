/* eslint-disable @next/next/no-img-element */
import { Col, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'
import style from './style.module.less'
import { SupportMethodCustom } from './SupportMethod.interface'

const { Content } = Layout

export const SupportMedthodCustom = ({
  dataSupportMethod
}: SupportMethodCustom) => {
  if (!dataSupportMethod || dataSupportMethod.length < 1) {
    return <em>Không có dataSupportMethod ...</em>
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
