import { Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import { NavbarHeaderMobile } from '../NavbarHeaderMobile'
import style from './styles.module.less'

interface Props {
  setDrawer: any
  listSupport: any[]
  logo: string
  Authencartion: any[]
}

export const MenuDrawer = ({ logo, listSupport, Authencartion }: Props) => {
  const { funcGroup, guideGroup, supportGroup }: any = listSupport
  const { isAuthen, nameUser }: any = Authencartion
  return (
    <div className={style.drawerMenu}>
      <NavbarHeaderMobile drawer={true} logo={logo} />
      <Container className={style.containerDrawerMenu}>
        <Row className={style.rowView}>
          <div className={style.itemSingle}>
            <img
              src={
                'https://resource-testing.medpro.com.vn/static/media/icon/avatar.svg'
              }
              alt={'avatar'}
            />
            Xin chào&nbsp;<b>{nameUser}</b>
          </div>
        </Row>

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
          <div className={style.itemSingle}>
            <img
              src={
                'https://resource-testing.medpro.com.vn/static/media/icon/log-out.svg'
              }
              alt={'log-out'}
            />
            Đăng xuất
          </div>
          <p>
            <em>Phiên bản 1.1.2</em>
          </p>
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
