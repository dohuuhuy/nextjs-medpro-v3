import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { DropdownProfile } from '../DropdownProfile'
import style from './styles.module.less'

export const HandlerBtnUser = ({ isAuthen = false, nameUser }: any) => {
  const iconHandler = isAuthen ? (
    <UserOutlined className={style.icons} />
  ) : (
    <LoginOutlined className={style.icons} />
  )

  const router = useRouter()

  const Login = () => {
    router.push(
      `https://id-testing.medpro.com.vn/check-phone/url=${'http://localhost:3007'}&partnerId=${'medpro'}&bookingFlow=true`
    )
  }

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
          onClick={Login}
        >
          {'Đăng nhập'}
        </Button>
      )
  }
}
