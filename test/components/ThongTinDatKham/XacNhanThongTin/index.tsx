import React from 'react'
import { Table, Row, Col } from 'antd'
import styles from './styles.module.less'
import { UserAddOutlined } from '@ant-design/icons'
export const XacNhanThongTin = () => {
  const dataSource = [
    {
      key: '1',
      Stt: '1',
      ChuyenKhoa: "CHĂM SÓC GIẢM NHẸ",
      DichVu: 'Khám dịch vụ 150,000đ',
      BacSi: "Lương Văn Đến",
      GioKham: '19/08 15:30',
      TienKham: "150.000đ",
    },
    {
      key: '2',
      Stt: '2',
      ChuyenKhoa: "CHĂM SÓC GIẢM NHẸ 1",
      DichVu: 'Khám dịch vụ 150,000đ',
      BacSi: "Lương Văn Đến",
      GioKham: '19/08 15:30',
      TienKham: "150.000đ",
    },
  ];
  const columns = [
    {
      title: '#',
      dataIndex: 'Stt',
      align: "center",
    },
    {
      title: 'Chuyên khoa',
      dataIndex: 'ChuyenKhoa',
      align: "center",
    },
    {
      title: 'Dịch vụ',
      dataIndex: 'DichVu',
      align: "center",
    },
    {
      title: 'Bác sĩ',
      dataIndex: 'BacSi',
      align: "center",
    },
    {
      title: 'Giờ khám',
      dataIndex: 'GioKham',
      align: "center",
    },
    {
      title: 'Tiền khám',
      dataIndex: 'TienKham',
      align: "center",
    },
    {
      title: '',
      dataIndex: 'Xoa',
      align: "center",
      render: () => <a>Xoasa</a>,
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Thông tin đặt khám</h2>
      <Table className={styles.tblProfile} dataSource={dataSource} pagination={false} columns={columns as any} />
      <h2>Thông tin bệnh nhân</h2>
      <Row className={styles.rowProfile}>
        <Col xl={12} className={styles.colProfile}>
          <ul className={styles.listItem}>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
          </ul>
          <ul className={styles.listItem}>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.itemProfile}>
                <div className={styles.itemKey}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Họ và tên</p>
                </div>
                <div className={styles.itemValue}>
                  <p>Lê Thị Luyến</p>
                </div>
              </div>
            </li>
          </ul>
      </Row>
    </div>

      )
}
