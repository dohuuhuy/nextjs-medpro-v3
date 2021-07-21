/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { LogoutOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row } from 'antd'
import React from 'react'
import { Info, ItemDrawer } from '../header.interface'
import style from './../styles.module.less'

const { Content } = Layout

interface Props {
  setDrawer(): any
  closeDrawer(): any
  Menu: Array<ItemDrawer>
  logo: string
  Authencartion: Array<Info>
}

const MenuDrawer = ({
  setDrawer,
  closeDrawer,
  Menu,
  Authencartion,
  logo
}: Props) => {
  const { isAuthen, nameUser }: any = Authencartion

  return (
    <Content className={style.drawerMenu}>
      <Content className={style.headerDrawer}>
        <img src={logo} className={style.logoDrawer} />
        <Button
          onClick={() => setDrawer()}
          type='default'
          size='large'
          className={style.btnClose}
        >
          <b>Đóng</b>
        </Button>
      </Content>

      <Content className={style.viewBtnSign}>
        {isAuthen ? (
          <Row className={style.rowUser}>
            <Col className={style.colIcon}>
              <img
                src={
                  'https://medpro.com.vn/static/media/medpro_circle.dc9c7663.svg'
                }
              />
            </Col>
            <Col className={style.colName}>
              Xin Chào
              <b className={style.nameUser}>{nameUser}</b>
            </Col>
          </Row>
        ) : (
          <Button
            href='/'
            type='default'
            size='large'
            className={style.btnSign}
          >
            <p className={style.textBtnSign}>Đăng nhập tài khoản</p>
          </Button>
        )}
      </Content>

      {Menu.map((item, index: number) => (
        <Row key={index} className={style.groupBtn}>
          {item.funcGroup.map((itemfunc, indexGuid: number) => (
            <Button
              key={indexGuid}
              href={itemfunc.link}
              onClick={() => closeDrawer()}
              type='default'
              size='large'
              icon={
                <Col className={style.colIcon}>
                  <i className={itemfunc.icon} />
                </Col>
              }
              className={style.btnContact}
            >
              <Col className={style.colTextBtn}>
                <b className={style.textBtn}>{itemfunc.label}</b>
              </Col>
            </Button>
          ))}
        </Row>
      ))}

      {Menu.map((item, index: number) => (
        <Row key={index} className={style.groupBtn}>
          {item.guideGroup.map((itemGuid, indexGuid: number) => (
            <Button
              key={indexGuid}
              href={itemGuid.link}
              onClick={() => closeDrawer()}
              type='default'
              size='large'
              icon={
                <Col className={style.colIcon}>
                  <i className={itemGuid.icon} />
                </Col>
              }
              className={style.btnContact}
            >
              <Col className={style.colTextBtn}>
                <b className={style.textBtn}>{itemGuid.label}</b>
              </Col>
            </Button>
          ))}
        </Row>
      ))}

      {Menu.map((item, index: number) => (
        <Row key={index} className={style.groupBtn}>
          {item.supportGroup.map((itemSupport, indexSup: number) => (
            <Button
              key={indexSup}
              href={itemSupport.link}
              onClick={() => closeDrawer()}
              type='default'
              size='large'
              icon={
                <Col className={style.colIcon}>
                  <i className={itemSupport.icon} />
                </Col>
              }
              className={style.btnContact}
            >
              <Col className={style.colTextBtn}>
                <b className={style.textBtn}>{itemSupport.label}</b>
              </Col>
            </Button>
          ))}
        </Row>
      ))}

      <Row className={style.viewVersion}>
        {isAuthen ? (
          <Button
            href={'/login'}
            onClick={() => closeDrawer()}
            type='default'
            size='large'
            icon={
              <Col className={style.colIcon}>
                <LogoutOutlined />
              </Col>
            }
            className={style.btnLogout}
          >
            <Col className={style.colText}>
              <b className={style.textBtnLogout}>Đăng xuất</b>
            </Col>
          </Button>
        ) : null}
        <p className={style.textVersion}>Phiên bản: 1.1.2</p>
      </Row>
    </Content>
  )
}

export default MenuDrawer
