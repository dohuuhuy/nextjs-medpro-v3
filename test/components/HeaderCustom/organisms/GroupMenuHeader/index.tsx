import Container from '../../../Container'
import { Row } from 'antd'
import React from 'react'
import MenuHeader from '../../molecules/MenuHeader'
import styles from './styles.module.less'
import { MenuInfo } from '../../molecules/MenuInfo'

export interface GroupMenuHeader {
  menuHeader: any
  Authencartion: any
}

export const GroupMenuHeader = ({
  menuHeader,
  Authencartion
}: GroupMenuHeader) => {
  return (
    <Container>
      <Row className={styles.rowMenuInfo}>
        <MenuInfo Authencartion={Authencartion} />
      </Row>
      <Row className={styles.rowMenuHeader}>
        <MenuHeader menuHeader={menuHeader} />
      </Row>
    </Container>
  )
}
