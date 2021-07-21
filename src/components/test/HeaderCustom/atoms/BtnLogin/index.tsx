import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import style from './styles.module.less'
export const BtnLogin = ({ nameUser }: any) => {
  return (
    <Button
      className={style.login}
      type='default'
      size='large'
      icon={<UserOutlined className={style.icons} />}
    >
      {nameUser || 'Đăng nhập'}
    </Button>
  )
}
