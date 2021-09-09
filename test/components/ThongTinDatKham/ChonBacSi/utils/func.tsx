import React from 'react'
import { UserOutlined, CalendarOutlined, ForkOutlined, WomanOutlined, DollarCircleOutlined } from '@ant-design/icons'

export interface Medthod {
  listDoctor: Listdoctor[]
}
export interface Listdoctor {
  detail: Detail
}
export interface Detail {
  name: string,
  role: string,
  subject: string,
  price: string,
  days: string,
  gender: number
}

export const HandleFilter = ({ listDoctor }: Medthod) => {
  return listDoctor.map((item) => [
    {
      key: item.detail.role,
      value: item?.detail.name,
      icon: <UserOutlined />
    },
    {
      key: 'Giới tính:',
      value: item?.detail.gender ? 'Nam' : 'Nữ',
      icon: <WomanOutlined />
    },
    {
      key: 'Chuyên khoa:',
      value: item?.detail.subject,
      icon: <ForkOutlined />
    },
    {
      key: 'Lịch khám:',
      value: "Thứ " + item?.detail.days,
      icon: <CalendarOutlined />
    },
    {
      key: 'Giá khám',
      value: item?.detail.price,
      icon: <DollarCircleOutlined />
    }
  ])
}