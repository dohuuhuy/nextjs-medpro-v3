import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import Container from '../../Container'
import { handlerQuickView, handlerValue } from '../utils/func'
import styles from './styles.module.less'
export const ChuyenKhoa = {
  vn: 'Chuyên khoa',
  en: 'subject'
}
export const ChonChuyenKhoa = (props: any) => {
  const { quickView, setquickView, next } = props

  const onClick = (id: any, name: string, subType: string) => {
    setquickView(
      handlerQuickView({ quickView, KEY: ChuyenKhoa, name, id, subType })
    )
    next()
  }
  return (
    <Container className={styles.ChonChuyenKhoa}>
      <Input
        className={styles.Search}
        size='large'
        placeholder='Tìm nhanh chuyên khoa'
        autoFocus={true}
        prefix={<SearchOutlined />}
        allowClear={true}
      />

      <ul className={styles.listChuyenKhoa}>{itemList(props, onClick)}</ul>
    </Container>
  )
}

const itemList = (props: any, onClick: any) => {
  {
    return handlerValue(props, ChuyenKhoa)?.map(
      ({ detail, subType }: any, index: number) => {
        const { name } = detail
        return (
          <li key={index} onClick={() => onClick(index, name, subType)}>
            <p>{name.toUpperCase()}</p>
          </li>
        )
      }
    )
  }
}
