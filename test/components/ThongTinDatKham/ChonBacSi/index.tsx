import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Dropdown, Input, Space } from 'antd'
import React from 'react'
import { handlerValue } from '../utils/func'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'
import { dropDegree, dropSex, dropSpecial } from './utils/components/drops'
import { HandleFilter } from './utils/func'
export const BacSi = {
  vn: 'Bác sĩ',
  en: 'doctor'
}
export const ChonBacSi = (Props: Medthods) => {
  const listDoctor = handlerValue(Props, BacSi)
  console.log('Danh sách bác sĩ', listDoctor)
  const Filter = HandleFilter()

  const onChange = () => {
    console.log('Cần setting')
  }
  // const abc = [] // khởi tạo mảng rỗng
  // dataDoctor.map((item) => { // lấy dữ liệu role bỏ vào mảng
  //   return (
  //     abc.push(item.detail.role)
  //   )
  // })
  // function unique(arr: any[]) { // filter trùng
  //   return Array.from(new Set(arr))
  // }
  // console.log(unique(abc))
  return (
    <div className={styles.container}>
      {/* thanh tìm kiếm */}
      <Input
        className={styles.Search}
        size='large'
        placeholder='Tìm nhanh chuyên khoa'
        autoFocus={true}
        prefix={<SearchOutlined />}
        allowClear={true}
        onChange={onChange}
      />
      {/* DropdownList */}
      <Space className={styles.SpaceDrop}>
        <Space>
          <Dropdown
            className={styles.Dropdown}
            overlay={dropDegree}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              Học vị <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Dropdown
            className={styles.Dropdown}
            overlay={dropSpecial}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              Chuyên khoa <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Dropdown
            className={styles.Dropdown}
            overlay={dropSex}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              Giới tính <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      </Space>
      {/* Danh sách bác sĩ  */}
      <div>
        <ul>
          {Filter.map(({ key, value, icon }: any, index: any) => {
            return (
              <li key={index + 'id'}>
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
