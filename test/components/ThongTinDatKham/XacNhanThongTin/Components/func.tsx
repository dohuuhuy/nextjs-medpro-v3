import {
  CalendarOutlined,
  HomeOutlined,
  PhoneOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { uniqueId } from 'lodash'
import React from 'react'
import { Medthods } from '../../utils/interface'
export const HandleFilter = (Props: Medthods) => {
  const item = Props?.listPatient?.[1]
  return [
    {
      id: uniqueId(),
      key: 'Họ và tên',
      value: item?.fullname,
      icon: <UserOutlined />
    },
    {
      id: uniqueId(),
      key: 'Ngày sinh',
      value: item?.birthdate,
      icon: <CalendarOutlined />
    },
    {
      id: uniqueId(),
      key: 'Số điện thoại',
      value: item?.mobile,
      icon: <PhoneOutlined />
    },
    {
      id: uniqueId(),
      key: 'Giới tính',
      value: item?.sex ? 'Nam' : 'Nữ',
      icon: <TeamOutlined />
    },
    {
      id: uniqueId(),
      key: 'Dân tộc',
      value: item?.nation?.name,
      icon: <PieChartOutlined />
    },
    {
      id: uniqueId(),
      key: 'Địa chỉ',
      value: item?.fullAddress,
      icon: <HomeOutlined />
    }
  ]
}
