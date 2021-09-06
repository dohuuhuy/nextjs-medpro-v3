import React from 'react'
import styles from './styles.module.less'
import { Space, Input, Menu, Dropdown } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { listDegree, listSpecial, listSex } from './utils/array'

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

  const dropSpecial = (
    <Menu>
      {listSpecial.map((item: any, id: any) => {
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

  const dropSex = (
    <Menu>
      {listSex.map((item: any, id: any) => {
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
          <Dropdown className={styles.Dropdown} overlay={dropDegree} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
              Học vị <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Dropdown className={styles.Dropdown} overlay={dropSpecial} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
              Chuyên khoa <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Dropdown className={styles.Dropdown} overlay={dropSex} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
              Giới tính <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      </Space>
    </div>
  )
}
