import styles from './styles.module.less'

export const CardConcise = (props: any) => {
  const { quickView } = props

  return (
    <div className={styles.cardInfoBooking}>
      <div className={styles.cardHeader}>Thông tin khám</div>
      <div className={styles.cardBody}>
        {quickView?.map(({ key, value }: any, i: number) => {
          return (
            <p key={i}>
              {key}: {value}
            </p>
          )
        })}
      </div>
    </div>
  )
}
