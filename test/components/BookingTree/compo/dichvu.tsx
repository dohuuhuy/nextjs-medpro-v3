import styles from './../less/dichvu.module.less'
export const DichVu = () => {
  return (
    <section className={styles.dichVu}>
      <ul className={styles.groupBtn}>
        <li>
          <button className={styles.btn}>
            <span>Khám thường</span>
            <span>0 VND</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <span>Khám dịch vụ</span>
            <span>80.000 VND</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <span>Khám V.I.P</span>
            <span>150.000 VND</span>
          </button>
        </li>
      </ul>
      <div className={styles.questionBHYT}>
        <span>Bạn có bảo hiểm y tế không?</span>
        <div className={styles.groupRadio}>
          <div className={styles.radio}>
            <input type='radio' value='1' /> có
          </div>
          <div className={styles.radio}>
            <input type='radio' /> không
          </div>
        </div>
      </div>
    </section>
  )
}
