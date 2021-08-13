import React from 'react'
import styles from './styles.module.less'

interface Props {
  Menu: any[]
  Authencartion: any[]
}

export const NavBottom = ({ Menu }: Props) => {
  return (
    <ul className={styles.nav_bottom}>
      {Menu.map((item, index: number) => (
        <li key={index} className={styles.colBtn}>
          <a className={styles.btn}>
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
//      <Col className={styles.colBtn}>
//        <a className={styles.btn}>
//          <UserOutlined />
//          Hồ sơ
//        </a>
//      </Col>
//    ) : (
//      <Col className={styles.colBtn}>
//        <a className={styles.btn}>
//          <LoginOutlined />
//          Đăng nhập
//        </a>
//      </Col>
//    )
//  }
