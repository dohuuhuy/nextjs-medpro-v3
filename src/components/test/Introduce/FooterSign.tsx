import { Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './style.module.less'

export const FooterSign = () => {
  return (
    <Row className={styles.footer}>
      <p>
        Tìm hiểu thêm về quy trình &nbsp;
        <Link href={'#'}>
          <a className={styles.dot}>đăng ký khám bệnh</a>
        </Link>
      </p>
    </Row>
  )
}
