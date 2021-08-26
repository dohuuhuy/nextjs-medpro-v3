import Link from 'next/link'
import React from 'react'
import styles from './styles.module.less'

interface Props {
  linkSupport: ItemSupport[]
}

export interface ItemSupport {
  id?: string
  label: string
  link: string
}

export const SuportFooter = ({ linkSupport }: Props) => {
  return (
    <ul className={styles.listLinkSupport}>
      {linkSupport?.map((item: any, index: number) => (
        <li key={index}>
          <Link href={item.link}>
            <a className={styles.aLink}>
              <p className={styles.infocompany}>{item.label}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
