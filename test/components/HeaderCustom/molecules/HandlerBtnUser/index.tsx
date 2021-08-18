/* eslint-disable no-console */
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DropdownProfile } from '../DropdownProfile'
import styles from './styles.module.less'

export const HandlerBtnUser = ({
  isAuthen = false,
  nameUser,
  funcGetListPatient
}: any) => {
  const iconHandler = isAuthen ? (
    <UserOutlined className={styles.icons} />
  ) : (
    <LoginOutlined className={styles.icons} />
  )

  const router = useRouter()
  const dispatch = useDispatch()

  const Login = () => {
    router.push(
      `https://id-testing.medpro.com.vn/check-phone/url=${
        window.location.origin
      }&partnerId=${'medpro'}&bookingFlow=true`
    )
  }

  const onClick = () => {
    funcGetListPatient && dispatch(funcGetListPatient())
  }

  const style: any = isAuthen ? styles.user : styles.login

  switch (isAuthen) {
    case true:
      return (
        <Dropdown
          overlay={<DropdownProfile nameUser={nameUser} />}
          trigger={['click']}
          placement='bottomRight'
        >
          <Button className={style} icon={iconHandler} onClick={onClick}>
            {nameUser}
          </Button>
        </Dropdown>
      )

    default:
      return (
        <Button className={style} icon={iconHandler} onClick={Login}>
          {'Đăng nhập'}
        </Button>
      )
  }
}
