import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import Container from '../../Container'
import { handlerQuickView, handlerValue } from '../utils/func'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'
export const ChuyenKhoa = {
  vn: 'Chuyên khoa',
  en: 'subject'
}
export const ChonChuyenKhoa = (props: Medthods) => {
  console.log("Chuyen khoa", props)
  const { quickView, setquickView, next } = props

  const getList = handlerValue(props, ChuyenKhoa)
  console.log("handle Chuyen khoa", getList)
  const [findList, setfindList] = useState([])

  useEffect(() => {
    setfindList(getList)
  }, [])

  const onClick = (id: any, name: string, subType: string) => {
    setquickView(
      handlerQuickView({ quickView, KEY: ChuyenKhoa, name, id, subType })
    )
    next()
  }

  const onChange = (e: any) => {
    const { value } = e.target
    const find = getList?.filter(
      ({ detail }: any) =>
        detail?.name?.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    find && setfindList(find)
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
        onChange={onChange}
      />

      <ul className={styles.listChuyenKhoa}>{itemList(findList, onClick)}</ul>
    </Container>
  )
}

const itemList = (getList: any, onClick: any) => {
  {
    return getList?.map(({ detail, subType }: any, i: number) => {
      const { name } = detail
      return (
        <li key={i} onClick={() => onClick(i, name, subType)}>
          <p>{name.toUpperCase()}</p>
        </li>
      )
    })
  }
}
