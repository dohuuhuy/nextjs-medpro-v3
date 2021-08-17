import {
  CalendarOutlined,
  SolutionOutlined,
  CustomerServiceOutlined,
  IdcardOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import React from 'react'
import { ChonChuyenKhoa } from '../ChonChuyenKhoa'
import { ChonDichVu } from '../ChonDichVu'

export const handleStep = (medthods: any) => {
  const { stepBooking } = medthods

  const steps: any = [
    {
      title: 'Ngày khám',
      icon: <CalendarOutlined color='red' style={{ color: '#1da1f2' }} />,
      content: 'Ngày khám'
    },
    {
      title: 'Hồ sơ',
      icon: <SolutionOutlined style={{ color: '#1da1f2' }} />,
      content: 'Hồ sơ'
    },
    {
      title: 'Xác nhận',
      icon: <SolutionOutlined style={{ color: '#1da1f2' }} />,
      content: 'Xác nhận'
    }
  ]

  for (let index = 0; index < stepBooking.length; index++) {
    const item = stepBooking[index]

    if (item === 'service') {
      steps.splice(index, 0, {
        title: 'Dịch vụ',
        icon: <CustomerServiceOutlined style={{ color: '#1da1f2' }} />,
        content: <ChonDichVu {...medthods} />
      })
    } else if (item === 'subject') {
      steps.splice(index, 0, {
        title: 'Chuyên khoa',
        icon: <IdcardOutlined style={{ color: '#1da1f2' }} />,
        content: <ChonChuyenKhoa {...medthods} />
      })
    } else if (item === 'doctor') {
      steps.splice(index, 0, {
        title: 'Bác sỉ',
        icon: <UsergroupAddOutlined style={{ color: '#1da1f2' }} />,
        content: 'Last-content'
      })
    }
  }

  return steps
}
