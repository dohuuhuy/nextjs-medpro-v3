/* eslint-disable @next/next/no-img-element */
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import style from './styles.module.less'

interface Props {
  Menu: Array<any>
  Authencartion: Array<any>
}

export const NavBottom = ({ Menu, Authencartion }: Props) => {
  const { isAuthen }: any = Authencartion

  console.log('Menu :>> ', Menu)

  return (
    <ul className={style.nav_bottom}>
      {Menu.map((item, index: number) => (
        <li key={index} className={style.colBtn}>
          <a className={style.btn}>
            <img src={item.icon} alt='icon' />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

//  {
//    isAuthen ? (
//      <Col className={style.colBtn}>
//        <a className={style.btn}>
//          <UserOutlined />
//          Hồ sơ
//        </a>
//      </Col>
//    ) : (
//      <Col className={style.colBtn}>
//        <a className={style.btn}>
//          <LoginOutlined />
//          Đăng nhập
//        </a>
//      </Col>
//    )
//  }
