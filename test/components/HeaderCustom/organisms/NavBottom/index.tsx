import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'

interface Props {
  Menu: any[]
  Authencartion: any[]
}

export const NavBottom = ({ Menu }: Props) => {
  return (
    <ul className={styles.nav_bottom}>
      {Menu.map((item, i: number) => (
        <li key={i} className={styles.colBtn}>
          <a className={styles.btn}>
            <Image src={item?.icon} alt='icon' height='25' width='25' />
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
