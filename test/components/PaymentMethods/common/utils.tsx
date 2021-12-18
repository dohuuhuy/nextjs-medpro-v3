import { Icon } from '@componentsTest/Icon'
import styles from './../styles.module.less'

export const handleHeader = (item: any) => {
  return (
    <div className={styles.headerCollaps}>
      <figure className={styles.viewIcon}>
        <Icon name='TheATM' size='30' />
      </figure>
      <div className={styles.contenTitle}>
        <span className={styles.title}>{item.name}</span>
        <span className={styles.subtitle}>{item.subtitle}</span>
      </div>
    </div>
  )
}
