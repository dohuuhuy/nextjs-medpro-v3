import React from 'react'
import Image from 'next/image'
import styles from './styles.module.less'
import cx from 'classnames'
import * as icons from './icons'
export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = '20' | '25' | '30' | '35' | '40' | '50' | '60' | '80'

interface IconProps {
  name: IconName
  size?: IconSize
  className?: string
}

export const Icon = ({ name, size = '20' }: IconProps) => {
  const Icon = icons[name]
  return <Image src={Icon} width={size} height={size} alt='' />
}
