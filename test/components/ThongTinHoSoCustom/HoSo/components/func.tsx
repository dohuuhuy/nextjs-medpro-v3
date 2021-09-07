import {
  CalendarOutlined,
  HomeOutlined,
  PhoneOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import React from 'react'
import { Medthods } from './interface'
export const HandleFilter = (Props: Medthods) => {
  return Props?.listPatient.map((item: any) => [
    {
      id: item.id,
      key: '',
      value: item?.fullname,
      icon: <UserOutlined />
    },
    {
      id: item.id,
      key: 'Ngày sinh',
      value: item?.birthdate,
      icon: <CalendarOutlined />
    },
    {
      id: item.id,
      key: 'Số điện thoại',
      value: item?.mobile,
      icon: <PhoneOutlined />
    },
    {
      id: item.id,
      key: 'Giới tính',
      value: item?.sex ? 'Nam' : 'Nữ',
      icon: <TeamOutlined />
    },
    {
      id: item.id,
      key: 'Dân tộc',
      value: item?.nation?.name,
      icon: <PieChartOutlined />
    },
    {
      id: item.id,
      key: 'Địa chỉ',
      value: item?.fullAddress,
      icon: <HomeOutlined />
    }
  ])
}
