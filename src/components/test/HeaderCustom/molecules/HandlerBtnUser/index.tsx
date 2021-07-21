import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React from 'react'
import { DropdownProfile } from '../DropdownProfile'
import style from './styles.module.less'

export const HandlerBtnUser = ({ isAuthen = false, nameUser }: any) => {
  const iconHandler = isAuthen ? (
    <UserOutlined className={style.icons} />
  ) : (
    <LoginOutlined className={style.icons} />
  )

  switch (isAuthen) {
    case true:
      return (
        <Dropdown
          overlay={<DropdownProfile nameUser={nameUser} />}
          trigger={['click']}
          placement='bottomRight'
        >
          <Button
            className={isAuthen ? style.user : style.login}
            type='default'
            size='large'
            icon={iconHandler}
          >
            {nameUser}
          </Button>
        </Dropdown>
      )

    default:
      return (
        <Button
          className={isAuthen ? style.user : style.login}
          type='default'
          size='large'
          icon={iconHandler}
        >
          {'Đăng nhập'}
        </Button>
      )
  }
}
