/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Layout, Col } from 'antd'
import { UserOutlined, LoginOutlined } from '@ant-design/icons'
import style from './../styles.module.less'
import { Info, ItemMenuMobile } from '../header.interface'

const { Content } = Layout

interface Props {
  Menu: Array<ItemMenuMobile>
  Authencartion: Array<Info>
}

const NavBottom = ({ Menu, Authencartion }: Props) => {
  const { isAuthen }: any = Authencartion

  return (
    <Content className={style.nav_bottom}>
      {Menu.map((item, index: number) => (
        <Col key={index} className={style.colBtn}>
          <a className={style.btn}>
            <i className={item.icon}></i>
            {item.label}
          </a>
        </Col>
      ))}
      {isAuthen ? (
        <Col className={style.colBtn}>
          <a className={style.btn}>
            <UserOutlined />
            Hồ sơ
          </a>
        </Col>
      ) : (
        <Col className={style.colBtn}>
          <a className={style.btn}>
            <LoginOutlined />
            Đăng nhập
          </a>
        </Col>
      )}
    </Content>
  )
}

export default NavBottom
