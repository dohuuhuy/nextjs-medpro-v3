import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'
export const BtnLogin = ({ nameUser, isAuthen }: any) => {
  const iconHandler = isAuthen ? (
    <UserOutlined className={styles.icons} />
  ) : (
    <LoginOutlined className={styles.icons} />
  )
  return (
    <Button
      className={isAuthen ? styles.user : styles.login}
      type='default'
      size='large'
      icon={iconHandler}
    >
      {nameUser || 'Đăng nhập'}
    </Button>
  )
}
