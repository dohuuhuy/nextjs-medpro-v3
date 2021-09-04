import React from 'react'
import styles from './styles.module.less'
import { Space, Input, Button, Menu, Dropdown } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { listDegree } from './utils'

export const ChonBacSi = () => {

  const dropDegree = (
    <Menu>
      {listDegree.map((item: any, id: any) => {
        return (
          <Menu.Item key={id + "id"}>
            <a>
              {item}
            </a>
          </Menu.Item>
        )
      })}
    </Menu>
  )
  const onChange = () => {
    console.log("Cần setting")
  }
  return (
    <div className={styles.container}>
      <Input
        className={styles.Search}
        size='large'
        placeholder='Tìm nhanh chuyên khoa'
        autoFocus={true}
        prefix={<SearchOutlined />}
        allowClear={true}
        onChange={onChange}
      />
      <Space className={styles.SpaceDrop}>
        <Space>
          <Dropdown className={styles.DropDegree} overlay={dropDegree} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Học vị <DownOutlined />
            </a>
          </Dropdown>,
        </Space>
        <Space>
          <Button type="primary">
            Chuyên khoa
          </Button>
        </Space>
        <Space>
          <Button type="primary">
            Giới tính
          </Button>
        </Space>
      </Space>
    </div>
  )
}
