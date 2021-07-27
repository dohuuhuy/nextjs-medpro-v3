/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import React from 'react'
import Container from './../../../Container'
import style from './styles.module.less'

export const LienHeContent = ({ content }: PropsProduce) => {
  if (!content) {
    return <Container className={style.containerError}>gelo</Container>
  }

  const { detailsContact, mapsContact } = content

  return (
    <Container className={style.containerContact}>
      <Row className={style.rowDetails}>
        <Col xl={9} className={style.colDetails}>
          <span className={style.title}>Thông tin chi tiết</span>
          <ul className={style.listInfo}>
            {detailsContact?.map(
              ({ subText, text, icon }: ItemContact, i: number) => (
                <li key={i}>
                  <img src={icon} alt='icon' />
                  <div className={style.textInfo}>
                    <span>{text}</span>
                    <p>{subText}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </Col>

        <Col xl={15} className={style.colFormContact}>
          chua form
        </Col>
      </Row>

      <hr />

      <Row className={style.rowMaps}>
        <iframe title='' src={mapsContact} />
      </Row>
    </Container>
  )
}

export interface PropsProduce {
  content: DetailContact
}
export interface DetailContact {
  detailsContact: any[]
  mapsContact: string
}

interface ItemContact {
  id?: string
  icon?: string
  subText?: string
  text?: string
}
