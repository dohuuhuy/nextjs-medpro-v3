import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { get, uniqueId } from 'lodash'
import React, { useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import { Icon } from '../Icon'
import styles from './styles.module.less'
import { Info, Profile } from './utils/data'

export interface user {
  fullName: string
  userName: string
  email: string
}

export const ConfirmInfo = (user: any) => {
  const [listPatient, _setListPatient] = useState(Object.values(user))
  const [patient, setPatient] = useState(listPatient[0])
  const [indexSelect, setIndexSelect] = useState(0)

  const SelectProfile = (index: number) => {
    listPatient?.filter((item: any, vitri) => {
      if (index === vitri) {
        setPatient(item)
        setIndexSelect(vitri)
      }
    })
  }

  return (
    <Container className={styles.container}>
      <Row className={styles.rowInfo}>
        <h3>XÁC NHẬN THÔNG TIN</h3>
        <Col xl={16} className={styles.colInfo}>
          <div className={styles.ProfileBooking}>
            <h4>Hồ sơ đặt khám</h4>
            <ul className={styles.listViewProfile}>
              <li>
                <div className={styles.viewProfile}>
                  <Button
                    className={styles.btnProfile}
                    icon={<Icon name='plus' size='20' />}
                  />
                  <p>Tạo hồ sơ</p>
                </div>
              </li>
              {listPatient.map((item, index) => {
                return (
                  <li key={index}>
                    <div className={styles.viewProfile}>
                      <Button
                        className={
                          index === indexSelect
                            ? styles.btnProfileActive
                            : styles.btnProfile
                        }
                        onClick={() => SelectProfile(index)}
                      >
                        <Icon name='bacsinam' size='55' />
                      </Button>

                      <p>{get(item, 'fullname')}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className={styles.cardComplete}>
              {' '}
              {/* styles.cardInComplete */}
              <ul className={styles.listItem}>
                {Profile(patient)?.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <div className={styles.cardItem}>
                        <p>
                          <span className={styles.title}>{title}</span>
                          <span className={styles.value}>{value}</span>
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={styles.InfoBooking}>
            <h4>Thông tin đặt khám</h4>
            <div className={styles.cardInfo}>
              <ul className={styles.listItem}>
                {Info?.map(({ title, value }: any) => {
                  return (
                    <li key={uniqueId()}>
                      <div className={styles.cardItem}>
                        <p>
                          <span className={styles.title}>{title}</span>
                          <span className={styles.value}>{value}</span>
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className={styles.btnClose}>
                <CloseCircleOutlined />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <CardFee />
        </Col>
      </Row>
    </Container>
  )
}
