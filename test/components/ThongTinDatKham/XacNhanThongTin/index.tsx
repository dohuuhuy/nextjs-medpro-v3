import React from 'react'
import { Table, Space } from 'antd'
import styles from './styles.module.less'
import { Medthods } from '../utils/interface'
import { DeleteFilled } from '@ant-design/icons'
import { HandleFilter } from './Components/func'
export const XacNhanThongTin = (Props: Medthods) => {
  const Filter = HandleFilter(Props)
  const dataSource = [
    {
      key: '1',
      Stt: '1',
      ChuyenKhoa: 'CHĂM SÓC GIẢM NHẸ',
      DichVu: 'Khám dịch vụ 150,000đ',
      BacSi: 'Lương Văn Đến',
      GioKham: '19/08 15:30',
      TienKham: '150.000đ'
    }
  ]
  const columns = [
    {
      title: '#',
      dataIndex: 'Stt',
      align: 'center'
    },
    {
      title: 'Chuyên khoa',
      dataIndex: 'ChuyenKhoa',
      align: 'center'
    },
    {
      title: 'Dịch vụ',
      dataIndex: 'DichVu',
      align: 'center'
    },
    {
      title: 'Bác sĩ',
      dataIndex: 'BacSi',
      align: 'center'
    },
    {
      title: 'Giờ khám',
      dataIndex: 'GioKham',
      align: 'center'
    },
    {
      title: 'Tiền khám',
      dataIndex: 'TienKham',
      align: 'center'
    },
    {
      title: '',
      dataIndex: 'Xoa',
      align: 'center',
      render: () => (
        <a>
          <DeleteFilled />
          <span>Xóa</span>
        </a>
      )
    }
  ]
  return (
    <div className={styles.container}>
      <h3>Thông tin đặt khám</h3>
      <Table
        className={styles.tblProfile}
        dataSource={dataSource}
        pagination={false}
        columns={columns as any}
      />
      <h3>Thông tin bệnh nhân</h3>
      <ul className={styles.cardBody}>
        {Filter?.map(({ id, key, value, icon }: any, i: number) => {
          return (
            <li key={id + i}>
              <div className={styles.cardItem}>
                <Space>
                  <Space className={styles.itemKeys}>
                    <p>{icon}</p> {key && <p>{key}</p>}
                  </Space>
                  <p className={styles.itemValues}>{value}</p>
                </Space>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
