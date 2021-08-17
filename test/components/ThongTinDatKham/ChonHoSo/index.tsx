import {
  ArrowRightOutlined,
  DeleteOutlined,
  ReadOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import Container from '@componentsTest/Container'
import React from 'react'
import { Button } from 'antd'
import styles from './styles.module.less'

export const ChonHoSo = () => {
  // const [Detail, setDetail] = useState(false)
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
    <Container className={styles.containerProfile}>
      <div>
        <Button icon={<UserAddOutlined />} size='large' type='primary' />
      </div>
      <ul className={styles.listCard}>
        {Filter.map((item: any, index: any) => (
          <li key={index}>
            <div className={styles.cardProfile}>
              <div className={styles.cardBody}>
                <ul className={styles.listItem}>
                  {item.map(({ icon, title, values }: any) => (
                    <li key={title}>
                      <div className={styles.cardItem}>
                        <div className={styles.itemKeys}>
                          <figure className={styles.itemView}>{icon}</figure>
                          <p>{title}</p>
                        </div>
                        <div className={styles.itemValues}>
                          <p>{values}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardFooter}>
                <Button size='middle' icon={<DeleteOutlined />} className={styles.delete}>
                  Xóa
                </Button>
                <Button size='middle' icon={<DeleteOutlined />} className={styles.repair}>
                  Sửa
                </Button>
                <Button size='large' icon={<ArrowRightOutlined />} className={styles.continue}>
                  Tiếp tục
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
