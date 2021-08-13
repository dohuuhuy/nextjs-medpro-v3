import { MobileFilled } from '@ant-design/icons'
import { Button } from 'antd'
import cx from 'classnames'
import Link from 'next/link'
import React from 'react'
import { HandlerBtnUser } from '../HandlerBtnUser'
import { NoitiBell } from '../NotiBell'
import styles from './styles.module.less'

interface Props {
  Authencartion: Info[] | any
}

export interface Info {
  isAuthen: boolean
  nameUser?: string
}

export const MenuInfo = ({ Authencartion }: Props) => {
  const { isAuthen, nameUser }: any = Authencartion
  const notification = { totalNew: 0 }

  return (
    <ul className={styles.ListMenuInfo}>
      <li className={cx(!isAuthen && styles.hidden)}>
        <NoitiBell notification={notification} />
      </li>

      <li>
        <Link href='/#tai-ung-dung' as='/#tai-ung-dung' passHref={true}>
          <Button
            className={styles.downloadApp}
            type='default'
            size='large'
            icon={<MobileFilled className={styles.icons} />}
          >
            Tải ứng dụng
          </Button>
        </Link>
      </li>

      <li>
        <HandlerBtnUser isAuthen={isAuthen} nameUser={nameUser} />
      </li>
    </ul>
  )
}
