import Link from 'next/link'
import React from 'react'
import { ItemMenu } from '../../header.interface'

import style from './styles.module.less'

interface Props {
  menuHeader: Array<ItemMenu>
}

const MenuHeader = ({ menuHeader }: Props) => {
  return (
    <ul className={style.ListMenuHeader}>
      {menuHeader?.map((item) => (
        <li key={item.key}>
          <Link href={item.link || '/'}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuHeader
