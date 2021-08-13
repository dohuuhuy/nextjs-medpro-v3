import React from 'react'
import styles from './styles.module.less'

interface Props {
  infoContact: ItemContact[]
}

export interface ItemContact {
  id?: string
  key?: string
  label?: string
  value: string
  link: string
}

export const InfoFooter = ({ infoContact }: Props) => {
  return (
    <ul className={styles.listInfoContact}>
      {infoContact?.map((item, index: number) => {
        if (item.key === 'nameHospital') {
          return (
            <li key={index}>
              <p className={styles.nameCompany}>{item.value}</p>
            </li>
          )
        }
        return (
          <li key={index}>
            <p className={styles.infocompany}>
              {item.label}:{' '}
              {item.link ? (
                <a href={item.link} target='_blank' rel='noreferrer'>
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
