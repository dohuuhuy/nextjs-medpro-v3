import { Col, Row } from 'antd'
import React from 'react'
import Container from './../../../Container'
import { ContactDetail } from './ContactDetail'
import styles from './styles.module.less'

export const LienHeContent = ({ content }: PropsProduce) => {
  if (!content) {
    return <Container className={styles.containerError}>loading ...</Container>
  }

  const { detailsContact, mapsContact } = content

  return (
    <Container className={styles.containerContact}>
      <Row className={styles.rowDetails}>
        <Col xl={8} lg={8} md={24} sm={24} className={styles.colDetails}>
          <h2 className={styles.title}>Thông tin chi tiết</h2>
          <ul className={styles.listInfo}>
            {detailsContact?.map(
              ({ subText, text, icon }: ItemContact, i: number) => (
                <li key={i}>
                  <img src={icon} alt='icon' />
                  <div className={styles.textInfo}>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.subText}>{subText}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </Col>

        <Col xl={16} lg={16} md={24} sm={24} className={styles.colFormContact}>
          <ContactDetail dataContactDetail={content.detailsContact} />
        </Col>
      </Row>

      <hr />

      <Row className={styles.rowMaps}>
        <Col xl={24} className={styles.colMaps}>
          <iframe title='' src={mapsContact} />
        </Col>
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
