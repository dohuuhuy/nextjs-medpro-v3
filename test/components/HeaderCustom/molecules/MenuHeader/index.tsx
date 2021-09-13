import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ItemMenu } from '../../header.interface'
import styles from './styles.module.less'

interface Props {
  menuHeader: ItemMenu[]
}

const MenuHeader = ({ menuHeader }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <ul className={styles.ListMenuHeader}>
      {menuHeader?.map((el, i: number) => {
        return (
          el?.status && (
            <li key={i} className={pathname === el?.link ? styles.active : ''}>
              <Link href={el.link || '/'}>
                <a aria-label={el?.label}>{el?.label}</a>
              </Link>
            </li>
          )
        )
      })}
    </ul>
  )
}

export default MenuHeader
