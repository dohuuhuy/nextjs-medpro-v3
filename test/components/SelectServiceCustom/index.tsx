import { Table } from 'antd'
import React from 'react'

export const ChonDichVu = (props: any) => {
  const { bookingTree, quickView, setquickView, current, setcurrent } = props

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
    // {
    //   title: '',
    //   align: 'center',
    //   dataIndex: 'action',
    //   render: (_: any, record: any) => {
    //     const { name } = record.nameService
    //     return (
    //       <Button type='primary' onClick={() => setquickView([name])}>
    //         Chọn
    //       </Button>
    //     )
    //   }
    // }
  ]

  const data = bookingTree.child?.map((item: any, index: number) => {
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

  return (
    <Table
      rowKey='uid'
      columns={columns as any}
      dataSource={data}
      pagination={false}
      onRow={(record) => {
        const { name } = record.nameService
        return {
          onClick: () => {
            setquickView([name])
            setcurrent(current + 1)
          }
        }
      }}
    />
  )
}
