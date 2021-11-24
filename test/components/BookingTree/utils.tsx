import React from 'react'
import { Icon } from '../Icon'
import { BacSi } from './compo/bacsi'
import { ChuyenKhoa } from './compo/chuyenkhoa'
import { DichVu } from './compo/dichvu'
import { ThoiGian } from './compo/thoigian'

export const steps = [
  {
    key: 'doctor',
    title: 'Bác sĩ',
    icon: <Icon name='bacsi' />,
    content: <BacSi />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: []
  },
  {
    key: 'service',
    title: 'Dịch vụ',
    icon: <Icon name='dichvu' />,
    content: <DichVu />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: []
  },
  {
    key: 'subject',
    title: 'Chuyên khoa',
    icon: <Icon name='chuyenkhoa' />,
    content: <ChuyenKhoa />,
    after: {
      icon: <Icon name='timkiem' />,
      place: 'Tìm nhanh chuyên khoa',
      input: true
    },
    open: false,
    data: []
  },

  {
    key: 'time',
    title: 'Ngày giờ',
    icon: <Icon name='ngaygio' />,
    content: <ThoiGian />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: []
  }
]

export const colLeft = {
  xl: 16,
  lg: 16,
  md: 16,
  sm: 24,
  xs: 24
}

export const colRight = { xl: 8, lg: 8, md: 8, sm: 24, xs: 24 }

export interface Steps {
  key: 'subject' | 'doctor' | 'service' | 'time'
  title: string
  icon: JSX.Element
  content: any
  after?: {
    icon: JSX.Element
    input?: boolean
  }
  selected: any
  open: boolean
  sort: number
  data: any
}
