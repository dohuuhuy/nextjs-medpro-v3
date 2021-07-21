import Link from 'next/link'
import React from 'react'
import { ItemMenu } from './header.interface'
import style from './styles.module.less'

interface Props {
  Menu: Array<ItemMenu>
}

const MenuHeader = ({ Menu }: Props) => {
  return (
    <ul className={style.navbar_nav}>
      {Menu?.map((item) => (
        <li
          className={item.active ? style.active : style.nav_item}
          key={item.key}
        >
          <Link href={item.link || '/'}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuHeader
