import React from 'react'
import styles from './styles.module.less'
import { Select, Label, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { CaretDownOutlined } from '@ant-design/icons'

export const ChuaKhamCustom = () => {
  return (
    <div className={styles.container}>
      <form>
        <div>
          <label>Họ và tên (có dấu)</label>
          <input placeholder="Nhập Họ và tên" />
        </div>
        {/* <div>
          <Label>Ngày tháng năm sinh</Label>
          <Select suffixIcon={<CaretDownOutlined />}>
            <Select.Option value="20">20</Select.Option>
            <Select.Option value="30">30</Select.Option>
          </Select>
          <Select suffixIcon={<CaretDownOutlined />}>
            <Select.Option value="20">20</Select.Option>
            <Select.Option value="30">30</Select.Option>
          </Select>
          <Select suffixIcon={<CaretDownOutlined />}>
            <Select.Option value="20">20</Select.Option>
            <Select.Option value="30">30</Select.Option>
          </Select>
        </div> */}
        {/* <div>
          <Label>Số điện thoại</Label>
          <Input placeholder="Nhập số điện thoại" />
        </div>
        <div>
          <Label>Giới tính</Label>
          <Select suffixIcon={<CaretDownOutlined />}>
            <Select.Option value="0">Chọn giới tính</Select.Option>
            <Select.Option value="1">Nam</Select.Option>
            <Select.Option value="2">Nữ</Select.Option>
          </Select>
        </div> */}
      </form>
    </div>
  )
}
