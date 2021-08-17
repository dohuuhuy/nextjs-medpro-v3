import {
  ArrowRightOutlined,
  DeleteOutlined,
  ReadOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import Container from '@componentsTest/Container'
import React from 'react'
import styles from './styles.module.less'

export const ChonHoSo = () => {
  const Data = [
    {
      name: 'Mạc Lệ Thảo',
      birthday: '17/7/2000',
      phone: '0987654321',
      sex: 'Nữ',
      nation: 'Kinh',
      address:
        'Bảo hiểm xã hội Tây Ninh, Xã Châu Phong, Thị xã Tân Châu, Tỉnh An Giang'
    },
    {
      name: 'Mạc Lệ Thảo 2',
      birthday: '17/7/2000',
      phone: '0987654321',
      sex: 'Nữ',
      nation: 'Kinh',
      address:
        'Bảo hiểm xã hội Tây Ninh, Xã Châu Phong, Thị xã Tân Châu, Tỉnh An Giang'
    }
  ]
  const Filter = Data.map((item) => [
    {
      icon: <UserAddOutlined />,
      title: '',
      values: item.name
    },
    {
      icon: <UserAddOutlined />,
      title: 'Ngày sinh',
      values: item.birthday
    },
    {
      icon: <UserAddOutlined />,
      title: 'Số điện thoại',
      values: item.phone
    },
    {
      icon: <UserAddOutlined />,
      title: 'Giới tính',
      values: item.sex
    },
    {
      icon: <UserAddOutlined />,
      title: 'Dân tộc',
      values: item.nation
    },
    {
      icon: <UserAddOutlined />,
      title: 'Địa chỉ',
      values: item.address
    }
  ])
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {Filter.map((item: any, index: any) => (
          <li key={index} className={styles.card}>
            <div className={styles.cardBody}>
              <ul className={styles.listContent}>
                {item.map(({ icon, title, values }: any) => (
                  <li key={title} className={styles.content}>
                    <div className={styles.title}>
                      <figure>{icon}</figure>
                      <p>{title}</p>
                    </div>
                    <div className={styles.values}>
                      <p>{values}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.delete}>
                <figure>
                  <DeleteOutlined />
                </figure>
                <p>Xóa</p>
              </div>
              <div className={styles.repair}>
                <figure>
                  <ReadOutlined />
                </figure>
                <p>Sửa</p>
              </div>
              <div className={styles.continue}>
                <p>Tiếp tục</p>
                <figure>
                  <ArrowRightOutlined />
                </figure>
              </div>
            </div>
          </li>
        ))}
        <div className={styles.Footer}>
          <div className={styles.Quaylai}>
            <p>Quay lại</p>
          </div>
          <div className={styles.ThemHoSo}>
            <p>Thêm hồ sơ</p>
          </div>
        </div>
      </ul>
    </div>
  )
}
