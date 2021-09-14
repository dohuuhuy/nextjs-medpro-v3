import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Dropdown, Input, Space } from 'antd'
import React from 'react'
import { handlerValue } from '../utils/func'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'
// import { dropDegree, dropSex, dropSpecial } from './utils/components/drops'
import { HandleFilter } from './utils/func'
import { ListDoctor } from './utils/components/listDoctorCard'

export const BacSi = {
  vn: 'Bác sĩ',
  en: 'doctor'
}
export const ChonBacSi = (Props: Medthods) => {
  const listDoctor = handlerValue(Props, BacSi)

  const Filter = HandleFilter(listDoctor)

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
        placeholder='Tìm nhanh bác sĩ'
        autoFocus={true}
        prefix={<SearchOutlined />}
        allowClear={true}
        onChange={onChange}
      />
      {/* DropdownList */}
      {/* <Space className={styles.SpaceDrop}>
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
      </Space> */}

      {/* Danh sách bác sĩ  */}
      <ListDoctor listCard={Filter} />
    </div>
  )
}
