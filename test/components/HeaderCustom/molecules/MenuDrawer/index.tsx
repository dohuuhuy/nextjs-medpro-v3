import { Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import { NavbarHeaderMobile } from '../NavbarHeaderMobile'
import styles from './styles.module.less'

interface Props {
  setDrawer: any
  listSupport: any[]
  logo: string
  Authencartion: any[]
}

export const MenuDrawer = ({
  logo,
  listSupport,
  Authencartion,
  setDrawer
}: Props) => {
  const { funcGroup, guideGroup, supportGroup }: any = listSupport
  const { isAuthen, nameUser }: any = Authencartion
  return (
    <div className={styles.drawerMenu}>
      <NavbarHeaderMobile
        drawer={true}
        logo={logo}
        togleDrawer={() => setDrawer()}
      />
      <Container className={styles.containerDrawerMenu}>
        <Row className={styles.rowView}>
          <div className={styles.itemSingle}>
            <img
              src={
                'https://resource-testing.medpro.com.vn/static/media/icon/avatar.svg'
              }
              alt={'avatar'}
            />
            Xin chào&nbsp;<b>{nameUser}</b>
          </div>
        </Row>

        <Row className={styles.rowView}>
          {isAuthen ? (
            <HandlerList element={funcGroup} />
          ) : (
            <button className={styles.btnLogin}>Đăng nhập tài khoản</button>
          )}
        </Row>

        <Row className={styles.rowView}>
          <HandlerList element={guideGroup} />
        </Row>

        <Row className={styles.rowView}>
          <HandlerList element={supportGroup} />
        </Row>

        <Row className={styles.rowView}>
          <div className={styles.itemSingle}>
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
    <ul className={styles.HandlerList}>
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
