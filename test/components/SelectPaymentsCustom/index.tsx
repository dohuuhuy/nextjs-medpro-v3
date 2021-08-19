import React from 'react'
import { Row, Col, Table } from 'antd'
import styles from './styles.module.less'
import { DeleteFilled } from '@ant-design/icons'

export const HinhThucThanhToan = () => {
  const column = [
    {
      title: '#',
      dataIndex: 'Stt',
      align: 'center'
    },
    {
      dataIndex: 'DichVu',
      align: 'center',
      render: () => <a><DeleteFilled /><span>Dịch vụ</span></a>,
    },

  ]
  return (
    <div>
      <Row>
        <Col xl={6}>
          Thanh toán bằng ví MoMo
        </Col>
        <Col xl={18}>
          <h2>Thông tin thanh toán</h2>

        </Col>
      </Row>
    </div>
  )
}
