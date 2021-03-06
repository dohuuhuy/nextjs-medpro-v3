import * as React from 'react'
import * as icons from './icons'
import styles from './styles.module.less'

export const Icon: React.FC<IconProps> = ({ name, size = '20', fill }) => {
  const _size = size + 'px'
  const { viewBox, id } = icons[name]

  return (
    <span
      className={styles.icon}
      style={{ width: _size, height: _size, fill: fill || '' }}
    >
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}

interface IconProps {
  name: IconName
  size?: IconSize
  fill?: any
}

type Icons = typeof icons
type IconName = keyof Icons
type IconSize =
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '32'
  | '35'
  | '40'
  | '50'
  | '55'
  | '60'
  | '80'
  | '90'
  | '100'
