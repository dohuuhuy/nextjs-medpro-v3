import { Table } from 'antd'
import React from 'react'
import { handlerQuickView } from '../utils/func'

export const ChonDichVu = (props: any) => {
  const DichVu = 'Dịch vụ'
  const { bookingTree, quickView, setquickView, next } = props

  return (
    <Table
      rowKey='uid'
      columns={columns as any}
      dataSource={dataRows(bookingTree)}
      pagination={false}
      onRow={(record) => {
        const { name } = record.nameService
        return {
          onClick: () => {
            setquickView(handlerQuickView(quickView, DichVu, name))
            next()
          }
        }
      }}
    />
  )
}

const dataRows = (bookingTree: any) => {
  return bookingTree?.child?.map((item: any, index: number) => {
    const { name, days, price } = item.detail
    return {
      index,
      nameService: {
        name,
        days
      },
      price
    }
  })
}

const columns = [
  {
    title: '#',
    align: 'center',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Tên dịch vụ',
    align: 'left',
    dataIndex: 'nameService',
    render: ({ name, days }: any) => (
      <div>
        <b>{name}</b> <br />
        <em>Lịch khám: thứ {days}</em>
      </div>
    )
  },
  {
    title: 'Giá tiền',
    align: 'center',
    dataIndex: 'price',
    render: (text: any) => <p>{text}đ</p>
  }
]
