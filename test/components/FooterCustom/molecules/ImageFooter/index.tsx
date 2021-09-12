import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  logoChecked?: ItemChecked[]
}

export interface ItemChecked {
  id?: string
  imgLogo: string
  link: string
}

export const ImageFooter = ({ logoChecked }: Props) => {
  return (
    <ul className={styles.listLogoChecked}>
      {logoChecked?.map(({ link, imgLogo }: any, i: number) => (
        <li key={i}>
          <Link href={link}>
            <a target='_blank'>
              <Image
                src={imgLogo}
                className={styles.img}
                alt='icon'
                width={185}
                height={70}
                objectFit='cover'
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
