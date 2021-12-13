import { Card, Menu } from 'antd'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import styles from './../styles.module.less'
import Link from 'next/link'
import { Icon } from '@componentsTest/Icon'

export const Infomation = ({ handleLogOut }: any) => {
  return (
    <Card
      title={
        <h3 className={styles.cardTitle}>
          <FaUser />
          <span>Thông tin cá nhân</span>
        </h3>
      }
      bordered={false}
      style={{ maxWidth: 300 }}
    >
      <Menu className={styles.listInfo}>
        <Menu.Item>
          <Link href={{
            pathname: "/thong-tin-ho-so",
            query: { activeItem: 1 }
          }}>
            Hồ sơ bệnh nhân
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={{
            pathname: "/thong-tin-ho-so",
            query: { activeItem: 2 }
          }}>
            Phiếu khám bệnh
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={{
            pathname: "/thong-tin-ho-so",
            query: { activeItem: 3 }
          }} passHref>
            <a>
              <Icon name="thongbao" />
              Thông báo
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<MdOutlineLogout />} onClick={() => handleLogOut()}>
          Đăng xuất
        </Menu.Item>
      </Menu>
    </Card>
  )
}
