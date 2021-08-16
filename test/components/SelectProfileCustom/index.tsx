import Container from '@componentsTest/Container'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { UserAddOutlined, DeleteOutlined, ArrowRightOutlined } from '@ant-design/icons'

export const ChonHoSo = () => {
  const [Detail, setDetail] = useState(false)
  const Data = [
    {
      name: 'Mạc Lệ Thảo',
      birthday: '17/7/2000',
      phone: "0987654321",
      sex: "Nữ",
      nation: "Kinh",
      address: "Bảo hiểm xã hội Tây Ninh, Xã Châu Phong, Thị xã Tân Châu, Tỉnh An Giang"
    },
    {
      name: 'Mạc Lệ Thảo 2',
      birthday: '17/7/2000',
      phone: "0987654321",
      sex: "Nữ",
      nation: "Kinh",
      address: "Bảo hiểm xã hội Tây Ninh, Xã Châu Phong, Thị xã Tân Châu, Tỉnh An Giang"
    },
  ]
  return (
    <Container className={styles.container}>
      <h2>CHỌN HỒ SƠ BỆNH NHÂN</h2>
      <ul className={styles.listCard}>
        {Data.map(({ name, birthday, phone, sex, nation, address }: any, index) => (
          <li key={index} className={styles.card} onClick={() => setDetail(!Detail)}>
            <ul className={styles.cardBody}>
              <li className={styles.element}>
                <div className={styles.title}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>{name}</p>
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
                  <p>{birthday}</p>
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
                  <p>{phone}</p>
                </div>
              </li>
              <li className={Detail ? styles.element : styles.hidden}>
                <div className={styles.title}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Giới tính</p>
                </div>
                <div className={styles.values}>
                  <p>{sex}</p>
                </div>
              </li>
              <li className={Detail ? styles.element : styles.hidden}>
                <div className={styles.title}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Dân tộc</p>
                </div>
                <div className={styles.values}>
                  <p>{nation}</p>
                </div>
              </li>
              <li className={Detail ? styles.element : styles.hidden}>
                <div className={styles.title}>
                  <figure>
                    <UserAddOutlined />
                  </figure>
                  <p>Địa chỉ</p>
                </div>
                <div className={styles.values}>
                  <p>{address}</p>
                </div>
              </li>
              <li className={Detail ? styles.Bottom : styles.hidden}>
                <div className={styles.delete}>
                  <figure>
                    <DeleteOutlined />
                  </figure>
                  <p>Xóa</p>
                </div>
                <div className={styles.repair}>
                  <figure>
                    <DeleteOutlined />
                  </figure>
                  <p>Sửa</p>
                </div>
                <div className={styles.continue}>
                  <p>Tiếp tục</p>
                  <figure>
                    <ArrowRightOutlined />
                  </figure>
                </div>
              </li>
            </ul>
          </li>
        )
        )}
      </ul>
      <div className={styles.btn}>Quay lại</div>
    </Container>
  )
}
