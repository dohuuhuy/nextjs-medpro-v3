import React, { useState } from 'react'
import { Row, Col, Button, Menu } from 'antd'
import styles from './styles.module.less'
import Container from '@componentsTest/Container'
import { HoSo } from './HoSo'
import { PhieuKhamBenh } from './PhieuKhamBenh'
import { ThongBao } from './ThongBao'
import {
  ProfileOutlined,
  FileTextOutlined,
  BellOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import cx from 'classnames'

export interface Personal {
  listUser: User[],
  listBooking: Booking[],
  listNotice: Notice[],
}

export interface User {
  fullname: string
}

export interface Booking {
  fullname: string
}

export interface Notice {
  fullname: string
}
export const ThongTinHoSoCustom = (props: any) => {
  console.log("Dữ liệu trả về ", props)
  const dataProfile = {
    listPatient: [
      {
        fullname: 'Phan Hải Sơn',
        birthdate: '10/07/1999',
        mobile: '0937036742',
        sex: '1',
        nation: { name: 'Kinh' },
        fullAddress: '41/60 Phạm Ngũ Lão , P.3, Q. Gò Vấp, TPHCM'
      },
      {
        fullname: 'Phan Hải Sơn',
        birthdate: '10/07/1999',
        mobile: '0937036742',
        sex: '1',
        nation: { name: 'Kinh' },
        fullAddress: '41/60 Phạm Ngũ Lão , P.3, Q. Gò Vấp, TPHCM'
      }
    ]
  }
  const dataCard = {
    listUser: [
      {
        name: 'Đỗ Hửu Huy',
        listExamination: [
          {
            hospital: 'Bệnh viện Da Liễu TP.HCM',
            special: 'Khám bệnh ngoài da',
            service: 'Khám dịch vụ',
            day: '30-06-2021',
            time: '09:30 (Buổi sáng)',
            type: 'Đã thanh toán'
          },
          {
            hospital: 'Bệnh viện Da Liễu TP.HCM',
            special: 'Khám bệnh ngoài da',
            service: 'Khám dịch vụ',
            day: '30-06-2021',
            time: '09:30 (Buổi sáng)',
            type: 'Đã thanh toán'
          }
        ]
      },
      {
        name: 'Đỗ Hửu Huy 1',
        listExamination: [
          {
            hospital: 'Bệnh viện Da Liễu TP.HCM',
            special: 'Khám bệnh ngoài da',
            service: 'Khám dịch vụ',
            day: '30-06-2021',
            time: '09:30 (Buổi sáng)',
            type: 'Đã thanh toán'
          },
          {
            hospital: 'Bệnh viện Da Liễu TP.HCM',
            special: 'Khám bệnh ngoài da',
            service: 'Khám dịch vụ',
            day: '30-06-2021',
            time: '09:30 (Buổi sáng)',
            type: 'Đã thanh toán'
          }
        ]
      }
    ]
  }

  const list = [
    {
      icon: <ProfileOutlined />,
      name: 'File',
      title: 'Hồ sơ bệnh nhân'
    },
    {
      icon: <FileTextOutlined />,
      name: 'Card',
      title: 'Phiếu khám bệnh'
    },
    {
      icon: <BellOutlined />,
      name: 'Noti',
      title: 'Thông báo'
    }
  ]
  const [Page, setPage] = useState(list[0].name)

  const handlePage = (name: string) => {
    setPage(name)
  }
  return (
    <Container>
      <Row className={styles.rowInfomation}>
        <Col xs={12} xl={8} className={styles.colFunc}>
          <div>
            <div className={styles.btnAddProfile}>
              <Button icon={<UserAddOutlined />} href='/tao-ho-so'>
                Thêm hồ sơ bệnh nhân
              </Button>
            </div>
            <div className={styles.btnGroup}>
              <Menu defaultSelectedKeys={['File']}>
                {list.map((item) => (
                  <Menu.Item
                    key={item.name}
                    icon={item.icon}
                    className={cx(
                      styles.btnItem,
                      item.name === Page ? styles.active : styles.unactive
                    )}
                    onClick={() => handlePage(item.name)}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={16} className={styles.colContent}>
          <div>
            {Page === 'File' ? (
              <HoSo {...dataProfile} />
            ) : Page === 'Card' ? (
              <PhieuKhamBenh {...dataCard} />
            ) : (
              <ThongBao />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
