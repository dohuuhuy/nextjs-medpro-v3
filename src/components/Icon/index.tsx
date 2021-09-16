/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import * as icons from './icons'
import styles from './styles.module.less'
import cx from 'classnames'
export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'
interface IconProps {
  name: IconName
  size?: IconSize
  className?: string
}

export const Icon = ({ name, size = 'small', className }: IconProps) => {
  const { viewBox, id } = icons[name]

  console.log(`icons[name]`, icons[name])

  console.log(`viewBox, id `, viewBox, id)
  return (
    <span
      className={cx(className, `${styles.icon} ${styles[`icon--${size}`]}`)}
    >
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} />
      </svg>
    </span>
  )
}
