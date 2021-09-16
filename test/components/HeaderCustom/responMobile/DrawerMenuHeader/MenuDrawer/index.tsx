import React from 'react'
import styles from './styles.module.less'
import { NavbarHeaderMobile } from '../NavbarHeaderMobile'
import { PropsMenuDrawer } from '../../DrawerMenuHeader'
import Container from '@componentsTest/Container'
import { Row, Space } from 'antd'
import Image from 'next/image'


export const MenuDrawer = (Props: PropsMenuDrawer) => {
  const { authen, listSupport, logo, setDrawer } = Props
  const { isAuthen, nameUser } = authen

  const { funcGroup, guideGroup, supportGroup } = listSupport
  return (
    <div className={styles.MenuDrawer}>
      <NavbarHeaderMobile
        drawer={true}
        logo={logo}
        togleDrawer={() => setDrawer()}
      />
      <Container className={styles.containerDrawerMenu}>
        <Row className={styles.rowView}>
          <div className={styles.itemSingle}>
            <figure className={styles.figure}>
              <Image
                src={
                  'https://resource-testing.medpro.com.vn/static/media/icon/avatar.svg'
                }
                alt={'avatar'}
                width={16}
                height={16}
              />
            </figure>
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
            <figure className={styles.figure}>
              <Image
                src={
                  'https://resource-testing.medpro.com.vn/static/media/icon/log-out.svg'
                }
                alt={'log-out'}
                width={16}
                height={16}
              />
            </figure>
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
            <figure className={styles.figure}>
              <Image src={icon} className={styles.Img} alt={''} width={16} height={16} />
            </figure>
            {label}
          </li>
        )
      })}
    </ul>
  )
}