import React, { ReactNode } from 'react'
import styles from './styles.module.less'
import cx from 'classnames'
type Props = {
  children?: ReactNode
  fluid?: boolean
  fixed?: boolean
  className?: any
}

const Container = ({
  children,
  fluid,
  fixed,
  className: classStyles,
}: Props) => {
  return (
    <div
      className={cx(styles.container, classStyles, {
        [styles.container_fluid]: fluid,
        [styles.container_fixed]: fixed,
      })}
    >
      {children}
    </div>
  )
}

export default Container
