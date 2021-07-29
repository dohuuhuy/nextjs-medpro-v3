import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import style from './style.module.less'
import { SupportMethod } from './SupportMethod.interface'

interface SupportMedthodCustom {
  dataSupportMethod: SupportMethod
}

export const SupportMedthodCustom = ({
  dataSupportMethod
}: SupportMedthodCustom) => {
  const { checkData, DataFailure } = require('./../DataFailure')
  if (checkData(dataSupportMethod)) {
    return <DataFailure description={'Lỗi không có data hỗ trợ'} />
  }

  return (
    <Container className={style.supportMedthod}>
      <Row className={style.rowSupport}>
        <span className={style.title}>Hỗ trợ</span>
        <h3 className={style.subTitle}>Các hình thức hỗ trợ</h3>
      </Row>
      <Row className={style.listSupportRow}>
        {dataSupportMethod?.map(
          (
            { nameMedthod, imgCard, description, link = '#' }: any,
            index: number
          ) => (
            <Col
              key={index}
              xl={6}
              md={6}
              sm={24}
              className={style.itemSupportCol}
            >
              <div className={style.cardSupport}>
                <img src={imgCard} className={style.img} alt='imgCard' />
                <div className={style.cardContent}>
                  <h4 className={style.titleCard}>{nameMedthod}</h4>
                  <Link href={link} passHref={true}>
                    <a className={style.descriptionCard}>{description}</a>
                  </Link>
                </div>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}
