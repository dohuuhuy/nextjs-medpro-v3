import { Col } from 'antd'
import Link from 'next/link'
import React from 'react'
import { ItemSupport } from './interface.footer'
import style from './styles.module.less'

interface Props {
  linkSupport: Array<ItemSupport>
}

export const SuportFooter = ({ linkSupport }: Props) => {
  return (
    <React.Fragment>
      {linkSupport?.map((item: any, index: number) => (
        <Col key={index}>
          <Link href={item.link}>
            <a className={style.aLink}>
              <p className={style.infocompany}>{item.label}</p>
            </a>
          </Link>
        </Col>
      ))}
    </React.Fragment>
  )
}
