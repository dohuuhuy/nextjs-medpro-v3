import cx from 'classnames'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'
type Props = {
  children?: ReactNode
  fluid?: boolean
  fixed?: boolean
  className?: any
  style?: any
  xxl?: boolean
  xl?: boolean
  md?: boolean
  sm?: boolean
}

const Container = ({
  children,
  fluid,
  fixed,
  className: classStyles,
  style,
  xl,
  md,
  sm
}: Props) => {
  return (
    <div
      style={style}
      className={cx(styles.container, classStyles, {
        [styles.container_fluid]: fluid,
        [styles.container_fixed]: fixed,
        [styles['container-xl']]: xl,
        [styles['container-md']]: md,
        [styles['container-sm']]: sm
      })}
    >
      {children}
    </div>
  )
}

export default Container
