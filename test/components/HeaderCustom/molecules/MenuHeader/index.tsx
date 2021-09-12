import Link from 'next/link'
import React from 'react'
import { ItemMenu } from '../../header.interface'
import { useRouter } from 'next/router'
import styles from './styles.module.less'
import { uniqueId } from 'lodash'

interface Props {
  menuHeader: ItemMenu[]
}

const MenuHeader = ({ menuHeader }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <ul className={styles.ListMenuHeader}>
      {menuHeader?.map((el) => {
        return (
          el?.status && (
            <li
              key={uniqueId()}
              className={pathname === el?.link ? styles.active : ''}
            >
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
