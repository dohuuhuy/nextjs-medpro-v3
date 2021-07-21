/* eslint-disable @next/next/no-img-element */
import { MenuOutlined } from '@ant-design/icons'
import { Col, Drawer, Row } from 'antd'
import React, { useState } from 'react'
import GroupButton from './GroupButton'
import { PropsHeader } from './header.interface'
import MenuDrawer from './MenuDrawer'
import MenuHeader from './MenuHeader'
import NavBottom from './NavBottom'
import style from './styles.module.less'

const HeaderCustom = ({ dataHeader, Authencartion }: PropsHeader) => {
  const [drawer, setDrawer] = useState<boolean>(false)

  if (!dataHeader || Object.keys(dataHeader).length < 1) {
    return <em>Lỗi không có dataHeader ...</em>
  }

  const {
    logoHeader,
    logoMobile,
    menuHeader,
    menuMobile,
    listSupport,
    support
  }: any = dataHeader

  const imgSupport = 'https://medpro.com.vn/static/media/chat.dba318df.svg'

  // func visible drawer
  function visibleDrawer() {
    setDrawer(!drawer)
  }

  function closeDrawer() {
    setDrawer(false)
  }

  return (
    <Row className={style.header}>
      <Col className={style.wapper}>
        <a href='#' className={style.linkLogo}>
          <img
            className={style.logo_brand}
            src={logoHeader}
            alt='Logo for website destop'
          />
          <img
            className={style.logo_responesive}
            src={logoMobile}
            alt='Logo for website mobile'
          />
        </a>
      </Col>
      <Col className={style.nav_middle}>
        <div className={style.nav_list_btn}>
          <GroupButton Authencartion={Authencartion} />
        </div>
        <div className={style.nav_menu}>
          <MenuHeader Menu={menuHeader} />
        </div>
      </Col>

      <Col className={style.nav_hotline}>
        <div className={style.hotline_img}>
          <img src={imgSupport} alt='Logo support' />
        </div>

        <div className={style.hotline_desc}>
          {support.textSuport}
          <a href={'tel:' + support.phone} className={style.hotline_phone}>
            <p>{support.phone}</p>
          </a>
        </div>
      </Col>

      <Col className={style.viewMenu}>
        <a onClick={() => visibleDrawer()} className={style.btnMenu}>
          <MenuOutlined />
          Menu
        </a>
      </Col>

      <Drawer
        placement='right'
        closable={false}
        visible={drawer}
        width={'100%'}
        bodyStyle={{
          padding: 0,
          backgroundColor: '#F2F2F2'
        }}
      >
        <MenuDrawer
          Menu={listSupport}
          Authencartion={Authencartion}
          logo={logoMobile}
          closeDrawer={closeDrawer}
          setDrawer={visibleDrawer}
        />
      </Drawer>

      <NavBottom Menu={menuMobile} Authencartion={Authencartion} />
    </Row>
  )
}

export default HeaderCustom
