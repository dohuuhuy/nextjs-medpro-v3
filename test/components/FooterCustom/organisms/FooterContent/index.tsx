import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import Container from '../../../Container'
import { ImageFooter } from '../../molecules/ImageFooter'
import { InfoFooter } from '../../molecules/InfoFooter'
import style from './styles.module.less'
import { SuportFooter } from '../../molecules/SuportFooter'
import { PropsFooter } from '../interface.footer'

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
        <Row className={style.rowFooter}>
          <Col
            className={cx(style.viewCol, CheckValue(logoFooter))}
            xl={4}
            lg={4}
            md={24}
            sm={24}
            xs={24}
          >
            <a
              href={logoFooter.linkImage}
              className={style.logoFooter}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={logoFooter.logoImage}
                className={style.logo}
                alt='logoFooter'
              />
            </a>
          </Col>

          <Col
            className={cx(style.viewCol, CheckValue(infoContact))}
            xl={10}
            lg={10}
            md={24}
            sm={24}
            xs={24}
          >
            <InfoFooter infoContact={infoContact} />
          </Col>

          <Col
            className={cx(
              style.viewCol,
              style.linkSupport,
              CheckValue(linkSupport)
            )}
            xl={4}
            lg={4}
            md={24}
            sm={24}
            xs={24}
          >
            <SuportFooter linkSupport={linkSupport} />
          </Col>

          <Col
            className={cx(style.viewCol, CheckValue(logoChecked))}
            xl={6}
            lg={6}
            md={24}
            sm={24}
            xs={24}
          >
            <ImageFooter logoChecked={logoChecked} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
