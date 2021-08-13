import { BellOutlined } from '@ant-design/icons'
import { Badge, Dropdown } from 'antd'
import React, { useState } from 'react'
import { DropdownNoti } from '../DropdownNoti'
import styles from './styles.module.less'

export const NoitiBell = ({ notification }: any) => {
  const [bell, setBell] = useState(false)

  const onClick = () => setBell(!bell)

  return (
    <Dropdown
      overlay={<DropdownNoti />}
      trigger={['click']}
      placement='bottomCenter'
    >
      <Badge
        count={notification.totalNew || null}
        showZero={true}
        size='small'
        className={styles.bell}
      >
        <a
          className={bell ? styles.activeBell : 'ant-dropdown-link'}
          onClick={onClick}
        >
          <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
        </a>
      </Badge>
    </Dropdown>
  )
}
