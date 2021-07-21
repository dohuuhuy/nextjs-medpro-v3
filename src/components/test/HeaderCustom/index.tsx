/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import React from 'react'
import Container from '../Container'

import { GroupMenuHeader } from './organisms/GroupMenuHeader'
import { LogoHeader } from './organisms/LogoHeader'
import { SupportHeader } from './organisms/SupportHeader'
import style from './styles.module.less'

export interface PropsHeader {
  dataHeader: Array<any> | any
  Authencartion: Array<any> | any
}

export const HeaderCustom = ({ dataHeader, Authencartion }: PropsHeader) => {
  if (!dataHeader || Object.keys(dataHeader).length < 1) {
    return <em>Lỗi không có dataHeader ...</em>
  }

  const {
    logoHeader,
    logoHeaderMobile,
    menuHeader,
    // menuMobile,
    // listSupport,
    support
  }: any = dataHeader

  return (
    <div className={style.HeaderCustom}>
      <Container className={style.containerHeaderCustom}>
        <Row className={style.rowHeaderCustom}>
          <Col xl={6}>
            <LogoHeader
              logoHeader={logoHeader}
              logoHeaderMobile={logoHeaderMobile}
            />
          </Col>
          <Col xl={14}>
            <GroupMenuHeader
              menuHeader={menuHeader}
              Authencartion={Authencartion}
            />
          </Col>
          <Col xl={4}>
            <SupportHeader support={support} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
