/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import React from 'react'
import Container from './../../../Container'
import { ContactDetail } from './ContactDetail'
import style from './styles.module.less'

export const LienHeContent = ({ content }: PropsProduce) => {
  if (!content) {
    return <Container className={style.containerError}>gelo</Container>
  }

  const { detailsContact, mapsContact } = content

  return (
    <Container className={style.containerContact}>
      <Row className={style.rowDetails}>
        <Col xl={8} lg={8} md={24} sm={24} className={style.colDetails}>
          <h2 className={style.title}>Thông tin chi tiết</h2>
          <ul className={style.listInfo}>
            {detailsContact?.map(
              ({ subText, text, icon }: ItemContact, i: number) => (
                <li key={i}>
                  <img src={icon} alt='icon' />
                  <div className={style.textInfo}>
                    <p className={style.text}>{text}</p>
                    <p className={style.subText}>{subText}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </Col>

        <Col xl={16} lg={16} md={24} sm={24} className={style.colFormContact}>
          <ContactDetail dataContactDetail={content.detailsContact} />
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
