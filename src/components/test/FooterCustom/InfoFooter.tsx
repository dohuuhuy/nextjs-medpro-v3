import React from 'react'
import { ItemContact } from './interface.footer'
import style from './styles.module.less'

interface Props {
  infoContact: Array<ItemContact>
}

export const InfoFooter = ({ infoContact }: Props) => {
  return (
    <ul className={style.listInfoContact}>
      {infoContact?.map((item, index: number) => (
        <li key={index}>
          {item.key === 'website' ? (
            <a key={item.id} href={item.value} className={style.aLink}>
              <p className={style.infoHospital}>
                {item.label} {item.value}
              </p>
            </a>
          ) : (
            <p
              className={item.label ? style.infoHospital : style.nameHospital}
              dangerouslySetInnerHTML={{
                __html: item.label ? item.label + ':\t' + item.value : item.value
              }}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
