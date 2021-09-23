import { Icon } from '../../Icon'
import React from 'react'
import styles from './../less/chuyenkhoa.module.less'

export const ChuyenKhoa = () => {
  return (
    <section className={styles.chuyenkhoa}>
      <div className={styles.input}>
        <Icon name='timkiem' />
        <input placeholder='Tìm nhanh chuyên khoa' />
      </div>

      <ul className={styles.listChuyenKhoa}>
        {chuyenkhoa.map((v, i) => {
          return (
            <li key={i}>
              <div className={styles.card}>
                <figure>{v.icon}</figure>
                <span>{v.label}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

interface chuyenkhoa {
  icon: JSX.Element
  label: string
}

const chuyenkhoa: chuyenkhoa[] = [
  {
    icon: <Icon name='demo' />,
    label: 'Tai mũi hộng'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Mắt'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Răng hàm mặt'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Da liễu'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Chán thương chỉnh hình'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Tim mạch'
  },
  {
    icon: <Icon name='demo' />,
    label: 'Tiêu hóa'
  }
]
