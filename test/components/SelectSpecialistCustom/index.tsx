import Container from '@components/atoms/Container'
import { Col, Row, Input } from 'antd'
import React, { useState } from 'react'
import styles from './style.module.less'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const SelectSpecialistCustom = () => {
  const [listSpecialist, setlistSpecialist] = useState<any[]>([])
  console.log(listSpecialist)
  function OnChange(e: any) {
    const { value } = e.target
    const findHospital = Data.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistSpecialist(findHospital)
  }
  const Data = [
    { name: "Khoa Thần Kinh" },
    { name: "Khoa Mắt" },
    { name: "Khoa Tai Mũi Mọng" },
    { name: "Khoa Tim" },
    { name: "Khoa Sơ Sinh" },
    { name: "Khoa Tiêu Hóa" },
    { name: "Khoa Thần Kinh" },
    { name: "Khoa Mắt" },
    { name: "Khoa Tai Mũi Mọng" },
    { name: "Khoa Tim" },
    { name: "Khoa Sơ Sinh" },
    { name: "Khoa Tiêu Hóa" },
    { name: "Khoa Thần Kinh" },
    { name: "Khoa Mắt" },
    { name: "Khoa Tai Mũi Mọng" },
    { name: "Khoa Tim" },
    { name: "Khoa Sơ Sinh" },
    { name: "Khoa Tiêu Hóa" }
  ]
  return (
    <Container className={styles.conSpecialist}>
      <Row className={styles.rowSpecialist}>
        <Col xs={24} sm={24} md={6} xl={6} className={styles.colLeft}>
          <h2 className={styles.title}>Thông tin khám</h2>
          <ul className={styles.listInfo}>
            <li className={styles.Info}>
              <figure className={styles.ImgInfo}>
                {/* <img /> */}
                <HomeOutlined />
              </figure>
              <div className={styles.content}>
                <p>Bệnh viện Nhi Đồng 1</p>
              </div>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={18} xl={18} className={styles.colRight}>
          <h2 className={styles.title}>Vui lòng chọn ngày khám</h2>
          <ul className={styles.listSpec}>
            <li className={styles.search}>
              <Input
                className={styles.Search}
                size='large'
                placeholder="Tìm nhanh chuyên khoa"
                autoFocus={true}
                prefix={
                  <SearchOutlined />
                }
                allowClear={true}
                onChange={OnChange}
              />
            </li>
            <li className={styles.cardList}>
              {Data.map(({ name }: any, index: number) => (
                <div key={index} className={styles.cardBody}>
                  <p>{name}</p>
                </div>
              ))}
            </li>
          </ul>
          <div className={styles.btnBack}>
            <Link href={`/chon-benh-vien`}>
              <p>Quay lại</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

// const ListInfo = (item) => {
//   const {hospital}: any = item
//   return (
//     <li className={styles.Info}>
//       <figure className={styles.ImgInfo}>
//         {/* <img /> */}
//         <HomeOutlined />
//       </figure>
//       <div className={styles.content}>
//         <p>Bệnh viện Nhi Đồng 1</p>
//       </div>
//     </li>
//   )
// }