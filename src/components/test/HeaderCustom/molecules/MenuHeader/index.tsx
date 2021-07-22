import Link from 'next/link'
import React from 'react'
import { ItemMenu } from '../../header.interface'
import { useRouter } from 'next/router'
import style from './styles.module.less'

interface Props {
  menuHeader: Array<ItemMenu>
}

const MenuHeader = ({ menuHeader }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <ul className={style.ListMenuHeader}>
      {menuHeader?.map((item) => (
        <li
          key={item.key}
          className={pathname === item.link ? style.active : ''}
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
