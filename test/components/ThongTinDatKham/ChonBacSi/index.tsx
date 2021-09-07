import React from 'react'
import styles from './styles.module.less'
import { Space, Input, Dropdown } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { dropDegree, dropSex, dropSpecial } from './utils/components/drops'
import { Medthods } from '../utils/interface'
import { handlerQuickView, handlerValue } from '../utils/func'
import { HandleFilter } from './utils/func'
export const BacSi = {
  vn: 'Bác sĩ',
  en: 'doctor'
}
export const ChonBacSi = (Props: Medthods) => {
  const listDoctor = handlerValue(Props, BacSi)
  console.log("Danh sách bác sĩ", listDoctor)
  const Filter = HandleFilter()

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
      <div>
        <ul>
          {Filter.map(({ key, value, icon }: any, index: any) => {
            return (
              <li key={index + "id"}>
                <div>
                  <Space>
                    <Space className={styles.itemKeys}>
                      <p>{icon}</p> {key && <p>{key}</p>}
                    </Space>
                    <p className={styles.itemValues}>{value}</p>
                  </Space>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
