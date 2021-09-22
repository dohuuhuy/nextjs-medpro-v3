import { Icon } from '../Icon'
import React from 'react'
import { Steps } from './interface'
import { DichVu } from './compo/dichvu'
import { ThoiGian } from './compo/thoigian'

export const steps: Steps[] = [
  {
    title: 'Chuyên khoa',
    icon: <Icon name='chuyenkhoa' />,
    content: 'hello cưng'
  },
  {
    title: 'Bác sĩ',
    icon: <Icon name='bacsi' />,
    content: ''
  },
  {
    title: 'Dịch vụ',
    icon: <Icon name='dichvu' />,
    content: <DichVu />
  },
  {
    title: 'Ngày giờ',
    icon: <Icon name='ngaygio' />,
    content: <ThoiGian />
  }
]
