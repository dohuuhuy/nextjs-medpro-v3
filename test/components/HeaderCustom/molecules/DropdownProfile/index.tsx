import {
  BellOutlined,
  FileAddOutlined,
  PoweroffOutlined,
  SolutionOutlined
} from '@ant-design/icons'
import { Menu, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.less'

const { Item } = Menu

interface Props {
  nameUser?: string
}

interface Menus {
  lug: string
  label: JSX.Element | string
  icon: JSX.Element | null
  tag?: JSX.Element | null | string
}

export const DropdownProfile = ({ nameUser }: Props) => {
  const menu: Array<Menus> = [
    {
      lug: '#',
      label: (
        <p>
          Xin chào! <b>{nameUser}</b>
        </p>
      ),
      icon: null
    },
    {
      lug: '/user',
      label: 'Hồ sơ bệnh nhân',
      icon: <SolutionOutlined />
    },

    {
      lug: '/user',
      label: 'Phiếu khám bệnh',
      icon: <FileAddOutlined />
    },
    {
      lug: '/user',
      label: 'Thông báo',
      icon: <BellOutlined />
    },
    {
      lug: '/logout',
      label: 'Thoát',
      icon: <PoweroffOutlined />
    },
    {
      lug: '#',
      tag: 'em',
      label: ' Phiên bản 1.1.1',
      icon: null
    }
  ]

  return (
    <Menu className={styles.menuDropdown}>
      {menu?.map(({ lug, label, icon }, i: number) => {
        return (
          <Item className={styles.item} key={i}>
            <Link href={lug}>
              <a>
                <Space>
                  {icon}
                  {label}
                </Space>
              </a>
            </Link>
          </Item>
        )
      })}
    </Menu>
  )
}
