import { Space } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export const ThongBao = () => {
  const data = [
    {
      time: "NGÀY 26 THÁNG 07, 2021",
      content: "Bạn đã đăng ký khám bệnh thành công tại Phòng khám Medic Sài Gòn Cơ Sở 3. Mã phiếu: T21072624YLJ1",
    },
    {
      time: "NGÀY 26 THÁNG 07, 2021",
      content: "Bạn đã đăng ký khám bệnh thành công tại Phòng khám Medic Sài Gòn Cơ Sở 3. Mã phiếu: T21072624YLJ1",
    },
    {
      time: "NGÀY 26 THÁNG 07, 2021",
      content: "Bạn đã đăng ký khám bệnh thành công tại Phòng khám Medic Sài Gòn Cơ Sở 3. Mã phiếu: T21072624YLJ1",
    },
    {
      time: "NGÀY 26 THÁNG 07, 2021",
      content: "Bạn đã đăng ký khám bệnh thành công tại Phòng khám Medic Sài Gòn Cơ Sở 3. Mã phiếu: T21072624YLJ1",
    }
  ]
  return (
    <div className={styles.container}>
      <h1>Danh sách thông báo</h1>
      <ul className={styles.listNoti}>
        {data.map(({ time, content }: any, id: any) => {
          return (
            <li key={id + "id"}>
              <div className={styles.cardView}>
                <div className={styles.cardContent}>
                  <Space direction='vertical' >
                    <Space className={styles.Time}>
                      <p>{time}</p>
                    </Space>
                    <Space className={styles.Content}>
                      <p>{content}</p>
                    </Space>
                    <Space className={styles.Detail}>
                      <a>Xem chi tiết ...</a>
                    </Space>
                  </Space>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
