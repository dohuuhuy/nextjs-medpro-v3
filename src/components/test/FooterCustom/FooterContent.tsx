/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import Container from '../Container'
import { ImageFooter } from './ImageFooter'
import { InfoFooter } from './InfoFooter'
import { PropsFooter } from './interface.footer'
import style from './styles.module.less'
import { SuportFooter } from './SuportFooter'

export const FooterContent = ({ dataFooter }: PropsFooter) => {
  if (!dataFooter || dataFooter.length < 1) {
    return <em>Lỗi không có dataFooter ...</em>
  }

  const { logoFooter, infoContact, linkSupport, logoChecked }: any = dataFooter

  const CheckValue = (el: any) => {
    if (!el) return style.hidden
  }

  return (
    <div className={style.viewFooter}>
      <Container>
        <Row className={style.colFooter}>
          <Col
            xl={4}
            md={4}
            className={cx(style.viewCol, CheckValue(logoFooter))}
          >
            <a href={'https://medpro.com.vn/'} className={style.logoFooter}>
              <img src={logoFooter} className={style.logo} alt='logoFooter' />
            </a>
          </Col>

          <Col
            xl={10}
            md={10}
            className={cx(style.viewCol, CheckValue(infoContact))}
          >
            <InfoFooter infoContact={infoContact} />
          </Col>

          <Col
            xl={4}
            md={4}
            className={cx(
              style.viewCol,
              style.linkSupport,
              CheckValue(linkSupport)
            )}
          >
            <SuportFooter linkSupport={linkSupport} />
          </Col>

          <Col
            xl={6}
            md={6}
            className={cx(style.viewCol, CheckValue(logoChecked))}
          >
            <ImageFooter logoChecked={logoChecked} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
