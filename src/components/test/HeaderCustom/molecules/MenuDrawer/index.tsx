/* eslint-disable @next/next/no-img-element */
import Container from '@components/test/Container'
import { Row } from 'antd'
import React from 'react'
import { NavbarHeaderMobile } from '../../atoms/NavbarHeaderMobile'
import style from './styles.module.less'

interface Props {
  setDrawer: any
  listSupport: Array<any>
  logo: string
  Authencartion: Array<any>
}

export const MenuDrawer = ({
  setDrawer,
  logo,
  listSupport,
  Authencartion
}: Props) => {
  const { funcGroup, guideGroup, supportGroup }: any = listSupport
  const { isAuthen }: any = Authencartion
  return (
    <div className={style.drawerMenu}>
      <NavbarHeaderMobile
        drawer={true}
        logo={logo}
        togleDrawer={() => setDrawer()}
      />
      <Container className={style.containerDrawerMenu}>
        <Row className={style.rowView}>
          {isAuthen ? (
            <HandlerList element={funcGroup} />
          ) : (
            <button className={style.btnLogin}>Đăng nhập tài khoản</button>
          )}
        </Row>

        <Row className={style.rowView}>
          <HandlerList element={guideGroup} />
        </Row>

        <Row className={style.rowView}>
          <HandlerList element={supportGroup} />
        </Row>

        <Row className={style.rowView}>
          <p>Phiên bản 1.1.2</p>
        </Row>
      </Container>
    </div>
  )
}

const HandlerList = ({ element }: any) => {
  return (
    <ul className={style.HandlerList}>
      {element.map(({ icon, label }: any, index: number) => {
        return (
          <li key={index}>
            <img src={icon} alt={''} /> {label}
          </li>
        )
      })}
    </ul>
  )
}
