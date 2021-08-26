import Container from '../../../Container'
import { Row } from 'antd'
import React from 'react'
import MenuHeader from '../../molecules/MenuHeader'
import styles from './styles.module.less'
import { MenuInfo } from '../../molecules/MenuInfo'

export interface GroupMenuHeader {
  dataHeader: any
  Authencartion: any
}

export const GroupMenuHeader = (Props: GroupMenuHeader) => {
  const { dataHeader } = Props

  return (
    <Container>
      <Row className={styles.rowMenuInfo}>
        <MenuInfo {...Props} />
      </Row>
      <Row className={styles.rowMenuHeader}>
        <MenuHeader menuHeader={dataHeader.menuHeader} />
      </Row>
    </Container>
  )
}
