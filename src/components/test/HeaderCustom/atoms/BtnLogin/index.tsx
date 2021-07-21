import { LoginOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import style from './styles.module.less'

export const BtnLogin = ({ nameUser, className, icon }: any) => {
  return (
    <Button className={className} type='default' size='large'>
      {nameUser || 'Đăng nhập'}
    </Button>
  )
}
