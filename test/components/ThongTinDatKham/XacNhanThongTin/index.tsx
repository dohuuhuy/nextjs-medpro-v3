import React from 'react'
import { Table, Row, Col } from 'antd'
import style from './styles.module.less'
import Container from '@components/atoms/Container';
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
    <Container>
      <h2>Thông tin đặt khám</h2>
      <Table dataSource={dataSource} pagination={false} columns={columns as any} />
      <h2>Thông tin bệnh nhân</h2>
      <Row>
        <Col xl={12} className={style.colProfile}>
          <ul className={style.listItem}>
            <li>
              <div className={style.ItemProfile}>

              </div>
            </li>
          </ul>
        </Col>
        <Col xl={12} className={style.colProfile}>b</Col>
      </Row>
    </Container>

  )
}
