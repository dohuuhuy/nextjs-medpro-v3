import { Card, Menu } from 'antd'
import React from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import styles from './../styles.module.less'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiUserPin, BiNotepad, BiBell, BiUserCircle } from 'react-icons/bi'
import { uniqueId } from 'lodash'

export const Infomation = ({ handleLogOut, data }: any) => {
  const router = useRouter()
  return (
    <Card
      title={
        <h3 className={styles.cardTitle}>
          <BiUserCircle size={25} />
          <span>
            <strong>Medpro</strong> xin chào,
            <br />
            <strong>{data}</strong>
          </span>
        </h3>
      }
      bordered={false}
      style={{ maxWidth: 300 }}
    >
      <Menu className={styles.listInfo}>
        <Menu.Item
          icon={<BiUserPin size={20} />}
          className={styles.MenuItem}
          key={uniqueId()}
        >
          <Link
            href={{
              pathname: '/thong-tin-ho-so',
              query: { activeItem: 1 }
            }}
            replace
          >
            Hồ sơ bệnh nhân
          </Link>
        </Menu.Item>
        <Menu.Item
          icon={<BiNotepad size={20} />}
          className={styles.MenuItem}
          key={uniqueId()}
        >
          <Link
            href={{
              pathname: '/thong-tin-ho-so',
              query: { activeItem: 2 }
            }}
            replace
          >
            Phiếu khám bệnh
          </Link>
        </Menu.Item>
        <Menu.Item
          icon={<BiBell size={20} />}
          className={styles.MenuItem}
          key={uniqueId()}
        >
          <Link
            href={{
              pathname: '/thong-tin-ho-so',
              query: { activeItem: 3 }
            }}
            replace
          >
            Thông báo
          </Link>
        </Menu.Item>
        <Menu.Item
          icon={<MdOutlineLogout size={20} />}
          className={styles.MenuItem}
          onClick={() => handleLogOut()}
          key={uniqueId()}
        >
          Đăng xuất
        </Menu.Item>
      </Menu>
    </Card>
  )
}
