import { Col, Row } from 'antd'
import React from 'react'
import Container from '../Container'
import { DrawerMenuHeader } from './organisms/DrawerMenuHeader'
import { GroupMenuHeader } from './organisms/GroupMenuHeader'
import { LogoHeader } from './organisms/LogoHeader'
import { NavBottom } from './organisms/NavBottom'
import { SupportHeader } from './organisms/SupportHeader'
import styles from './styles.module.less'
import { checkData, DataFailure } from '../DataFailure'
export interface PropsHeader {
  dataHeader: any[] | any
  Authencartion: any[] | any
}

export const HeaderCustom = (Props: PropsHeader) => {
  const { dataHeader, Authencartion } = Props

  if (checkData(dataHeader)) {
    return <DataFailure description={'Lỗi không có data header'} />
  }

  const { logoHeader, logoHeaderMobile, menuMobile, support }: any = dataHeader

  return (
    <div className={styles.HeaderCustom}>
      <Container className={styles.containerHeaderCustom}>
        <Row className={styles.rowHeaderCustom}>
          <Col xl={6} lg={6} md={6} className={styles.Col_LogoHeader}>
            <LogoHeader
              logoHeader={logoHeader}
              logoHeaderMobile={logoHeaderMobile}
            />
          </Col>
          <Col xl={14} lg={14} md={14} className={styles.Col_GroupMenuHeader}>
            <GroupMenuHeader {...Props} />
          </Col>
          <Col xl={4} lg={4} md={12} className={styles.Col_SupportHeader}>
            <SupportHeader support={support} />
          </Col>
        </Row>
      </Container>

      <DrawerMenuHeader dataHeader={dataHeader} Authencartion={Authencartion} />

      <NavBottom Menu={menuMobile} Authencartion={Authencartion} />
    </div>
  )
}
