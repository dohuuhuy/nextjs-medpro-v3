import Container from '@componentsTest/Container'
import React from 'react'
import styles from './styles.module.less'
import { UserAddOutlined } from '@ant-design/icons'

export const SelectProfileCustom = () => {
  return (
    <Container className={styles.container}>
      <h2>CHỌN HỒ SƠ BỆNH NHÂN</h2>
      <ul className={styles.listCard}>
        <li className={styles.card}>
          <ul className={styles.cardContent}>
            <li className={styles.element}>
              <div className={styles.title}>
                <figure>
                  <UserAddOutlined />
                </figure>
                <p>Mạc Lệ Thảo Mạc Lệ Thảo</p>
              </div>
            </li>
            <li className={styles.element}>
              <div className={styles.title}>
                <figure>
                  <UserAddOutlined />
                </figure>
                <p>Ngày sinh</p>
              </div>
              <div className={styles.values}>
                <p> 17/10/1983 </p>
              </div>
            </li>
            <li className={styles.element}>
              <div className={styles.title}>
                <figure>
                  <UserAddOutlined />
                </figure>
                <p>Số điện thoại</p>
              </div>
              <div className={styles.values}>
                <p> 0937036742 </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.btn}>Quay lại</div>
    </Container>
  )
}
