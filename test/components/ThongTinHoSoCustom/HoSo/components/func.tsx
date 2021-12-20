import {
  CalendarOutlined,
  HomeOutlined,
  PhoneOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Personal } from '@componentsTest/ThongTinHoSoCustom/utils/interface'
import React from 'react'

export const HandleFilter = (props: Personal) => {
  return props?.listUser.map((item) => [
    {
      key: '',
      value: item?.fullname,
      icon: <UserOutlined />
    },
    {
      key: 'Ngày sinh',
      value: item?.birthdate,
      icon: <CalendarOutlined />
    },
    {
      key: 'Số điện thoại',
      value: item?.mobile,
      icon: <PhoneOutlined />
    },
    {
      key: 'Giới tính',
      value: item?.sex ? 'Nam' : 'Nữ',
      icon: <TeamOutlined />
    },
    {
      key: 'Dân tộc',
      value: item?.nation?.name,
      icon: <PieChartOutlined />
    },
    {
      key: 'Địa chỉ',
      value: item?.fullAddress,
      icon: <HomeOutlined />
    }
  ])
}
