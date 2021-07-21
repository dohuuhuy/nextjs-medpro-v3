/* eslint-disable @next/next/no-img-element */

import Container from './../../../Container'
import { Col, Row } from 'antd'
import React from 'react'
import style from './styles.module.less'

interface Props {
  logo: string
  togleDrawer: any
  drawer: boolean
}

export const NavbarHeaderMobile = ({
  logo,
  togleDrawer,
  drawer = false
}: Props) => {
  return (
    <Container className={style.headerDrawer}>
      <Row className={style.rowHeaderDrawer}>
        <Col span={8} className={style.colLogoHeaderMobile}>
          <figure>
            <img src={logo} className={style.logoDrawer} alt='logo' />
          </figure>
        </Col>
        <Col span={4} className={style.colButtonHeaderMobile}>
          <button
            onClick={() => togleDrawer()}
            className={drawer ? style.btnClose : style.btnMenu}
          >
            {drawer ? (
              <span>Đóng</span>
            ) : (
              <div>
                <img
                  src='https://resource-testing.medpro.com.vn/static/media/icon/menu_hamburger.svg'
                  alt=''
                />
                <span>Menu</span>
              </div>
            )}
            <i className={style.bars}></i>
          </button>
        </Col>
      </Row>
    </Container>
  )
}
