import React from 'react'
import QRCode from 'react-qr-code'
import styles from './styles.module.less'

export const CardDownload = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.title}>Chúc mừng đặt khám thành công !</p>
      <p className={styles.subTitle}>
        Quý khách vui lòng cài đặt ứng dụng để xem chi tiết <br /> hướng dẫn và
        quản lý hồ sơ khám bệnh.
      </p>
      <div className={styles.group}>
        <div className={styles.QR}>
          <QRCode fgColor='#000000' size={90} value='https://qrco.de/bcQbe9' />
        </div>
        <div className={styles.linkDown}>
          <p>
            CHẠM ĐỂ KHÁM <br /> SCAN ĐỂ TẢI APP
          </p>
          <a href='#'>
            <button className={styles.btnDown}> Tải ứng dụng</button>
          </a>
        </div>
      </div>
    </div>
  )
}
