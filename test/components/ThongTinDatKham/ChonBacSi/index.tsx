import React from 'react'
import styles from './styles.module.less'
import { Space, Input, Dropdown, Menu } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { dropDegree, dropSex, dropSpecial } from './utils/components/drops'
import { Medthods } from '../utils/interface'
import { handlerQuickView, handlerValue } from '../utils/func'
import { HandleFilter, Medthod } from './utils/func'
import { ListDoctor } from './utils/components/listDoctorCard'
import { uniqueId } from 'lodash'


export const BacSi = {
  vn: 'Bác sĩ',
  en: 'doctor'
}
export const ChonBacSi = (Props: Medthods) => {
  const dataDoctor: any[] = handlerValue(Props, BacSi)
  const medthod: any = {
    listDoctor: dataDoctor
  }
  const Filter = HandleFilter({ ...medthod })
  const onChange = () => {
    console.log('Cần setting')
  }
  const abc = [] // khởi tạo mảng rỗng
  dataDoctor.map((item) => { // lấy dữ liệu role bỏ vào mảng
    return (
      abc.push(item.detail.role)
    )
  })
  function unique(arr: any[]) { // filter trùng
    return Array.from(new Set(arr))
  }
  console.log(unique(abc))
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
        {/* <Space>
          <Dropdown className={styles.Dropdown} overlay={dropDegree} trigger={['click']}>
            <a>
              Học vị <DownOutlined />
            </a>
          </Dropdown>
        </Space> */}
        {/* <Space>
          <Dropdown className={styles.Dropdown} overlay={dropSpecial} trigger={['click']}>
            <a>
              Chuyên khoa <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Dropdown className={styles.Dropdown} overlay={dropSex} trigger={['click']}>
            <a>
              Giới tính <DownOutlined />
            </a>
          </Dropdown>
        </Space> */}
      </Space>
      {/* Danh sách bác sĩ  */}
      <div>
        <ListDoctor listCard={Filter} />
      </div>
    </div>
  )
}
