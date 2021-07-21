import Link from 'next/link'
import React from 'react'
import { ItemSupport } from './footer.interface'
import style from './styles.module.less'

interface Props {
  linkSupport: Array<ItemSupport>
}

export const SuportFooter = ({ linkSupport }: Props) => {
  return (
    <ul className={style.listLinkSupport}>
      {linkSupport?.map((item: any, index: number) => (
        <li key={index}>
          <Link href={item.link}>
            <a className={style.aLink}>
              <p className={style.infocompany}>{item.label}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
