import { MobileFilled } from '@ant-design/icons'
import cx from 'classnames'
import React from 'react'
import { HandlerBtnUser } from '../HandlerBtnUser'
import { NoitiBell } from '../NotiBell'
import style from './styles.module.less'
import { Menu, Dropdown, Button } from 'antd'

interface Props {
  Authencartion: Array<Info> | any
}

export interface Info {
  isAuthen: boolean
  nameUser?: string
}

export const MenuInfo = ({ Authencartion }: Props) => {
  const { isAuthen, nameUser }: any = Authencartion
  const notification = { totalNew: 0 }

  return (
    <ul className={style.ListMenuInfo}>
      <li className={cx(!isAuthen && style.hidden)}>
        <NoitiBell notification={notification} />
      </li>

      <li>
        <Button
          href='/tai-ung-dung'
          className={style.downloadApp}
          type='default'
          size='large'
          icon={<MobileFilled className={style.icons} />}
        >
          Tải ứng dụng
        </Button>
      </li>

      <li>
        <HandlerBtnUser isAuthen={isAuthen} nameUser={nameUser} />
      </li>
    </ul>
  )
}
