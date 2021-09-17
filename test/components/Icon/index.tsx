/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import * as icons from './icons'
import styles from './styles.module.less'
import cx from 'classnames'
export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = '20' | '40' | '60' | '80'

interface IconProps {
  name: IconName
  size?: IconSize
  className?: string
}

export const Icon = ({ name, size = '20', className }: IconProps) => {
  return (
    <img
      className={cx(styles.icon, className)}
      src={icons[name]}
      alt='icon'
      style={{ width: size + 'px', height: size + 'px' }}
    />
  )
}
