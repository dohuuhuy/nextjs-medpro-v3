import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import style from './styles.module.less'
export const BtnLogin = ({ nameUser, isAuthen }: any) => {
  const iconHandler = isAuthen ? (
    <UserOutlined className={style.icons} />
  ) : (
    <LoginOutlined className={style.icons} />
  )
  return (
    <Button
      className={isAuthen ? style.user : style.login}
      type='default'
      size='large'
      icon={iconHandler}
    >
      {nameUser || 'Đăng nhập'}
    </Button>
  )
}
