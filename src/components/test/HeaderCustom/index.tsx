import { Col, Row } from 'antd'
import React from 'react'
import Container from '../Container'
import { DrawerMenu } from './organisms/DrawerMenu'

import { GroupMenuHeader } from './organisms/GroupMenuHeader'
import { LogoHeader } from './organisms/LogoHeader'
import { NavBottom } from './organisms/NavBottom'
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

  const { logoHeader, logoHeaderMobile, menuHeader, menuMobile, support }: any =
    dataHeader

  return (
    <div className={style.HeaderCustom}>
      <Container className={style.containerHeaderCustom}>
        <Row className={style.rowHeaderCustom}>
          <Col xl={6} className={style.Col_LogoHeader}>
            <LogoHeader
              logoHeader={logoHeader}
              logoHeaderMobile={logoHeaderMobile}
            />
          </Col>
          <Col xl={14} className={style.Col_GroupMenuHeader}>
            <GroupMenuHeader
              menuHeader={menuHeader}
              Authencartion={Authencartion}
            />
          </Col>
          <Col xl={4} md={12} className={style.Col_SupportHeader}>
            <SupportHeader support={support} />
          </Col>
        </Row>
      </Container>

      <DrawerMenu dataHeader={dataHeader} Authencartion={Authencartion} />

      <NavBottom Menu={menuMobile} Authencartion={Authencartion} />
    </div>
  )
}
