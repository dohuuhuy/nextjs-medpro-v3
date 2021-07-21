/* eslint-disable array-callback-return */
import { BellOutlined, MobileFilled } from '@ant-design/icons'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Badge, Button, Dropdown } from 'antd'
import React, { useState } from 'react'
import { BtnLogin } from '../../atoms/BtnLogin'
import DropdownNotification from '../../organisms/DropdownNotification'
import DropdownProfile from '../../organisms/DropdownProfile'
import style from './styles.module.less'

interface Props {
  Authencartion: Array<Info> | any
}

export interface Info {
  isAuthen: boolean
  nameUser?: string
}

export const MenuInfo = ({ Authencartion }: Props) => {
  const [bell, setBell] = useState(false)
  const { isAuthen, nameUser }: any = Authencartion
  const notification = { totalNew: 1 }

  return (
    <ul className={style.ListMenuInfo}>
      {isAuthen ? (
        <li>
          <Dropdown
            overlay={<DropdownNotification />}
            trigger={['click']}
            placement='bottomCenter'
          >
            {notification.totalNew ? (
              <Badge
                count={notification.totalNew}
                showZero
                size='small'
                className={style.bell}
              >
                <a
                  className={bell ? style.activeBell : 'ant-dropdown-link'}
                  onClick={() => setBell(!bell)}
                >
                  <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
                </a>
              </Badge>
            ) : (
              <Badge showZero size='small' className={style.bell}>
                <a
                  className={bell ? style.activeBell : 'ant-dropdown-link'}
                  onClick={() => setBell(!bell)}
                >
                  <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
                </a>
              </Badge>
            )}
          </Dropdown>
        </li>
      ) : null}
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

export const HandlerBtnUser = ({ isAuthen = false, nameUser }: any) => {
  switch (isAuthen) {
    case true:
      return (
        <Dropdown
          overlay={<DropdownProfile nameUser={nameUser} />}
          trigger={['click']}
          placement='bottomRight'
        >
          <BtnLogin className={style.login} nameUser={nameUser} />
        </Dropdown>
      )

    default:
      return <BtnLogin />
  }
}
