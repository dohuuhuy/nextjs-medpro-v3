import React from 'react'
import { Menu } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import Link from 'next/link'
import styles from './styles.module.less'

export const DropdownNoti = () => {
  return (
    <div className={styles.dropdownNotification}>
      <div className={styles.header_dropdown}>
        <span>
          <b>Danh sách thông báo</b>
        </span>
      </div>
      <div className='mdbdropdownItem'>
        <Menu>
          <Menu.Item className={styles.notification}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eligendi ipsam culpa modi eaque, est autem libero
              pariatur fuga hic quis vel voluptatem ut incidunt dicta eius, vero
              ipsa inventore.
            </p>
            <p>
              <ClockCircleOutlined /> 1 tuần trước
            </p>
          </Menu.Item>
          <Menu.Item className={styles.btnNotifi}>
            <Link href='/'>Xem tất cả</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}
