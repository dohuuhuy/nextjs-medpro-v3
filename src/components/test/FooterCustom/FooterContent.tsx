/* eslint-disable @next/next/no-img-element */
import { Col } from 'antd'
import React from 'react'
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

  return (
    <React.Fragment>
      <Col className={style.colFooter}>
        {logoFooter ? (
          <Col className={style.viewCol}>
            <a href={'https://medpro.com.vn/'}>
              <img src={logoFooter} className={style.logo} alt='logoFooter' />
            </a>
          </Col>
        ) : null}

        {infoContact ? (
          <Col className={style.viewCol}>
            <InfoFooter infoContact={infoContact} />
          </Col>
        ) : null}

        {linkSupport ? (
          <Col className={style.viewCol}>
            <SuportFooter linkSupport={linkSupport} />
          </Col>
        ) : null}

        {logoChecked ? (
          <Col className={style.viewCol}>
            <ImageFooter logoChecked={logoChecked} />
          </Col>
        ) : null}
      </Col>
    </React.Fragment>
  )
}
