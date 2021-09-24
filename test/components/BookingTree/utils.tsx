import React from 'react'
import { Icon } from '../Icon'
import { BacSi } from './compo/bacsi'
import { ChuyenKhoa } from './compo/chuyenkhoa'
import { DichVu } from './compo/dichvu'
import { ThoiGian } from './compo/thoigian'

export interface Steps {
  title: string
  icon: JSX.Element
  content: any
  after?: {
    icon: JSX.Element
    input?: boolean
  }
}

export const steps = [
  {
    title: 'Chuyên khoa',
    icon: <Icon name='chuyenkhoa' />,
    content: <ChuyenKhoa />,
    after: {
      icon: <Icon name='timkiem' />,
      place: 'Tìm nhanh chuyên khoa',
      input: true
    }
  },
  {
    title: 'Bác sĩ',
    icon: <Icon name='bacsi' />,
    content: <BacSi />,
    after: {
      icon: <Icon name='timkiem' />
    }
  },
  {
    title: 'Dịch vụ',
    icon: <Icon name='dichvu' />,
    content: <DichVu />,
    after: {
      icon: <Icon name='timkiem' />
    }
  },
  {
    title: 'Ngày giờ',
    icon: <Icon name='ngaygio' />,
    content: <ThoiGian />,
    after: {
      icon: <Icon name='timkiem' />
    }
  }
]
