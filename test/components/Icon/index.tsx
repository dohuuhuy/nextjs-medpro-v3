import * as React from 'react'
import * as icons from './icons'
import styles from './styles.module.less'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = '20' | '25' | '30' | '35' | '40' | '50' | '60' | '80' | '90' | '100'

interface IconProps {
  name: IconName
  size?: IconSize
  fill?: any
}

export const Icon: React.FC<IconProps> = ({ name, size = '20', fill }) => {
  const _size = size + 'px'
  const { viewBox, id } = icons[name]

  return (
    <span
      className={styles.icon}
      style={{ width: _size, height: _size, fill: fill }}
    >
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
