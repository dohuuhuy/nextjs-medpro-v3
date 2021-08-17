import { Table } from 'antd'
import React from 'react'
import { handlerQuickView, handlerValue, VNĐ } from '../utils/func'
export const DichVu = {
  vn: 'Dịch vụ',
  en: 'service'
}

export const ChonDichVu = (props: any) => {
  const { quickView, setquickView, next } = props

  return (
    <Table
      rowKey='uid'
      columns={columns as any}
      dataSource={dataRows(props)}
      pagination={false}
      onRow={(record, id: any) => {
        const {
          nameService: { name },
          subType
        } = record
        return {
          onClick: () => {
            setquickView(
              handlerQuickView({
                quickView,
                KEY: DichVu,
                name,
                id,
                subType
              })
            )
            next()
          }
        }
      }}
    />
  )
}

const dataRows = (props: any) => {
  return handlerValue(props, DichVu)?.map((item: any, index: number) => {
    const { name, days, price } = item.detail
    return {
      index,
      nameService: {
        name,
        days
      },
      price,
      subType: item.subType
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
    render: (text: any) => <p>{VNĐ(text)}đ</p>
  }
]
