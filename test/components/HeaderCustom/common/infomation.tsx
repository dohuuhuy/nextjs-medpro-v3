import { Card, Menu } from 'antd'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import styles from './../styles.module.less'

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
        <Menu.Item>helo chị hà</Menu.Item>
        <Menu.Item icon={<MdOutlineLogout />} onClick={() => handleLogOut()}>
          Đăng xuất
        </Menu.Item>
      </Menu>
    </Card>
  )
}
