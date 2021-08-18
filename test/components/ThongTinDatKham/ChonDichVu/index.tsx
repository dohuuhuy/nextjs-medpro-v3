import { Table } from 'antd'
import React from 'react'
import { handlerQuickView, handlerValue, VNĐ } from '../utils/func'
import { Medthods } from '../utils/interface'
export const DichVu = {
  vn: 'Dịch vụ',
  en: 'service'
}

interface Colums {
  title: string
  align: string
  dataIndex: string
  render?: ({ name, days }: any) => JSX.Element | undefined
}

export const ChonDichVu = (props: Medthods) => {
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
  return handlerValue(props, DichVu)?.map((item: any, i: number) => {
    const { name, days } = item.detail
    return {
      index: i,
      nameService: {
        name,
        days
      },
      ...item
    }
  })
}

const columns: Colums[] = [
  {
    title: '#',
    align: 'center',
    dataIndex: 'index'
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
