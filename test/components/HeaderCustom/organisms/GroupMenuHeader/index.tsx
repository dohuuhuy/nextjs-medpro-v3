import Container from '../../../Container'
import { Row } from 'antd'
import React from 'react'
import MenuHeader from '../../molecules/MenuHeader'
import style from './styles.module.less'
import { MenuInfo } from '../../molecules/MenuInfo'

interface GroupMenuHeader {
  menuHeader: any
  Authencartion: any
}

export const GroupMenuHeader = ({
  menuHeader,
  Authencartion
}: GroupMenuHeader) => {
  return (
    <Container>
      <Row className={style.rowMenuInfo}>
        <MenuInfo Authencartion={Authencartion} />
      </Row>
      <Row className={style.rowMenuHeader}>
        <MenuHeader menuHeader={menuHeader} />
      </Row>
    </Container>
  )
}
