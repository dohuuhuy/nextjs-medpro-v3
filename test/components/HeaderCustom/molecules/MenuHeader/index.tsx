import Link from 'next/link'
import React from 'react'
import { ItemMenu } from '../../header.interface'
import { useRouter } from 'next/router'
import styles from './styles.module.less'

interface Props {
  menuHeader: ItemMenu[]
}

const MenuHeader = ({ menuHeader }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <ul className={styles.ListMenuHeader}>
      {menuHeader?.map(
        (item) =>
          item.status && (
            <li
              key={item.key}
              className={pathname === item.link ? styles.active : ''}
            >
              <Link href={item.link || '/'}>
                <a>{item.label}</a>
              </Link>
            </li>
          )
      )}
    </ul>
  )
}

export default MenuHeader
