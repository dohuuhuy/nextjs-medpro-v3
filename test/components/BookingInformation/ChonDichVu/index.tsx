import { Table } from 'antd'
import { find, findIndex } from 'lodash'
import React from 'react'

export const ChonDichVu = (props: any) => {
  const { bookingTree, quickView, setquickView, current, setcurrent } = props

  const KEY = 'Dịch vụ'

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
      onRow={(record, rowIndex: any) => {
        const { name } = record.nameService
        return {
          onClick: () => {
            const findKey = find(quickView, { key: KEY })
            const findKeyIndex = findIndex(quickView, { key: KEY })

            if (findKey) {
              quickView[findKeyIndex] = {
                key: KEY,
                value: name,
                data: bookingTree?.child[rowIndex]
              }
            } else {
              quickView.push({
                key: KEY,
                value: name,
                data: bookingTree?.child[rowIndex]
              })
            }

            setquickView(quickView)
            setcurrent(current + 1)
          }
        }
      }}
    />
  )
}
