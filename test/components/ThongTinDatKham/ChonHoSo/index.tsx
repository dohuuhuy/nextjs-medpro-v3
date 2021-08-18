import { Button } from 'antd'
import React, { useState } from 'react'
import { Medthods } from '../utils/interface'
import styles from './styles.module.less'
import { UserAddOutlined, DeleteOutlined, ArrowRightOutlined } from '@ant-design/icons'

export const ChonHoSo = (Props: Medthods) => {
  const Filter = Props?.listPatient.map((item: any) => [
    {
      id: "1",
      Key: "",
      Value: item.fullname,
    },
    {
      id: "2",
      Key: "Ngày sinh",
      Value: item.birthdate,
    },
    {
      id: "3",
      Key: "Số điện thoại",
      Value: item.mobile,
    },
    {
      id: "4",
      Key: "Giới tính",
      Value: item.sex ? "Nam" : "Nữ",
    },
    {
      id: "5",
      Key: "Dân tộc",
      Value: Props?.listPatient.map(item => (item.nation.name))
    },
    {
      id: "6",
      Key: "Địa chỉ",
      Value: item.fullAddress,
    }
  ])
  const [Show, setShow] = useState(false)
  return (
    <div className={styles.container}>
      <ul className={styles.listCard}>
        {Filter.map((item: any, index: any) => {
          return (
            <li key={index}>
              <div className={styles.cardProfile}>
                <div className={styles.cardBody}>
                  <ul className={styles.listItem}>
                    {item.map(({ id, Key, Value }: any) => (
                      <li key={id} onClick={() => setShow(!Show)}>
                        <div className={id > "3" && !Show ? styles.hidden : styles.cardItem}>
                          <div className={styles.itemKeys}>
                            <figure className={styles.itemView}>
                              <UserAddOutlined />
                            </figure>
                            <p>{Key}</p>
                          </div>
                          <div className={styles.itemValues}>
                            <p>{Value}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={Show ? styles.cardFooter : styles.hidden}>
                  <div className={styles.feature}>
                    <Button size='middle' icon={<DeleteOutlined />} className={styles.delete}>
                      Xóa
                    </Button>
                    <Button size='middle' icon={<DeleteOutlined />} className={styles.repair}>
                      Sửa
                    </Button>
                  </div>
                  <Button size='large' icon={<ArrowRightOutlined />} className={styles.continue}>
                    Tiếp tục
                  </Button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
