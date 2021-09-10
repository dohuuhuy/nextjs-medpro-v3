import { Menu } from 'antd'
import { listDegree, listSex, listSpecial } from './array'
export const dropDegree = (
  <Menu>
    {listDegree.map((item: any, id: any) => {
      return (
        <Menu.Item key={id + 'id'}>
          <a>{item}</a>
        </Menu.Item>
      )
    })}
  </Menu>
)

export const dropSpecial = (
  <Menu>
    {listSpecial.map((item: any, id: any) => {
      return (
        <Menu.Item key={id + 'id'}>
          <a>{item}</a>
        </Menu.Item>
      )
    })}
  </Menu>
)

export const dropSex = (
  <Menu>
    {listSex.map((item: any, id: any) => {
      return (
        <Menu.Item key={id + 'id'}>
          <a>{item}</a>
        </Menu.Item>
      )
    })}
  </Menu>
)
