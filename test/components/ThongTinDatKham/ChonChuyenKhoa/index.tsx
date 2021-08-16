/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { find, findIndex } from 'lodash'
import React from 'react'
import Container from '../../Container'
import styles from './styles.module.less'

export const ChonChuyenKhoa = (props: any) => {
  const { quickView, setquickView, next } = props

  const KEY = 'Chuyên khoa'

  const onClick = (id: any, name: string) => {
    console.log('id :>> ', id)

    const findKey = find(quickView, { key: KEY })
    const findKeyIndex = findIndex(quickView, { key: KEY })

    if (findKey) {
      quickView[findKeyIndex] = {
        key: KEY,
        value: name,
        data: quickView[0]?.data?.child[findKeyIndex]
      }
    } else {
      quickView.push({
        key: KEY,
        value: name,
        data: quickView[0]?.data?.child[findKeyIndex]
      })
    }

    setquickView(quickView)
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

      <ul className={styles.listChuyenKhoa}>
        {quickView[0]?.data?.child?.map(({ detail }: any, index: number) => {
          const { name, id } = detail
          return (
            <li key={index} onClick={() => onClick(id, name)}>
              <p>{name.toUpperCase()}</p>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export const Data = [{ name: 'Khoa Thần Kinh' }, { name: 'Khoa Mắt' }]

// const [listSpecialist, setlistSpecialist] = useState<any[]>([])

// function OnChange(e: any) {
//   const { value } = e.target
//   const findHospital = Data.filter(
//     ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
//   )
//   // setlistSpecialist(findHospital)
// }
