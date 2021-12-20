import cx from 'classnames'
import styles from './styles.module.less'

export const CustomLine = ({ top, bottom, normal = true }: any) => {
  return (
    <div
      className={cx(
        styles.line,
        top && styles.top,
        bottom && styles.bottom,
        normal && styles.normal
      )}
    >
      <div className={styles.circle} />
      <div className={styles.dashed} />
      <div className={styles.circle} />
    </div>
  )
}
