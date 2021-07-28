import { Row } from 'antd'
import React from 'react'
import Container from '../Container'
import styles from './style.module.less'

interface NewsPageCustom {
  dataNewsPageBanner: any
  dataNewsPageContent: any
}

export const NewsPageCustom = ({ dataNewsPageBanner, dataNewsPageContent }: NewsPageCustom) => {
  const { DataFailure } = require('../DataFailure')
  if (!dataNewsPageBanner || dataNewsPageBanner.length < 1) {
    return <DataFailure description={'Lỗi không có data tin tức banner'} />
  }
  if (!dataNewsPageContent || dataNewsPageContent.length < 1) {
    return <DataFailure description={'Lỗi không có data tin tức content'} />
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <ul className={styles.colCard}>
          <img
            src={
              'https://cms.medpro.com.vn/uploads/1627418134461_d1b169c9b4.png'
            }
            alt=' '
          />
          <li>
            <p>NHẬN BIẾT VÀ PHÒNG NGỪA THOÁI HÓA ĐÓT SỐNG CỔ</p>
            <span>
              Thoái hóa đốt sống cổ hay còn gọi là thoái hóa cột sống cổ hoặc
              thoái hóa cột sống lưng là một trong những tên gọi của tình trạng
              bệnh lý thoái hóa hệ thống xương cột sống do nhiều nguyên nhân
              khác nhau trong công việc, lao động, hoạt động, tuổi tác.
            </span>
          </li>
        </ul>
        <ul className={styles.colCard}>
          <li>
            <p>NỔI MỀ ĐAY - DO ĐÂU ?</p>
            <span>
              Mề đay là tình trạng phản ứng của các mao mạch dưới da hay niêm
              mạc do các tác nhân từ bên trong hoặc bên ngoài cơ thể, gây hiện
              tượng phù tại chỗ, da bị phồng lên, kèm triệu chứng ngứa ngáy khó
              chịu.
            </span>
          </li>
          <li>
            <p>NHỨC MỎI MẮT THỜI COVID VÀ CÁCH ỨNG PHÓ</p>
            <span>
              Trong thời điểm dịch bệnh COVID-19, từ trẻ em đến người lớn giải
              trí, làm việc, học tập đều qua các thiết bị điện tử kết nối với
              internet. Việc sử dụng quá nhiều các thiết bị điện tử thông minh
              cũng gây hại cho đôi mắt.
            </span>
          </li>
        </ul>
      </Row>
      <Row className={styles.rowContent} />
    </Container>
  )
}
