import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { get, uniqueId } from 'lodash'
import React, { useEffect, useState } from 'react'
import { CardFee } from '../CardFee'
import Container from '../Container'
import { Icon } from '../Icon'
import styles from './styles.module.less'
import { Info, Profile } from './utils/data'
import { ConfirmInfoIF, StateConfirm } from './utils/interface'

export const ConfirmInfo = (props: ConfirmInfoIF) => {
  const [stateConfirm, setstateConfirm] = useState<StateConfirm>({
    listPatient: props.listPatient,
    patient: [],
    indexSelect: 0,
    itemSelected: {}
  })

  useEffect(() => {
    setstateConfirm((v) => ({
      ...v,
      itemSelected: props.listPatient[0]
    }))
  }, [])

  console.log('props :>> ', props.schedule)
  const selectItem = (item: any) => {
    console.log('item :>> ', item)
    setstateConfirm((v) => ({
      ...v,
      itemSelected: item
    }))
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
              {stateConfirm.listPatient?.map((item, index) => {
                const activeSlect =
                  item.id === stateConfirm.itemSelected.id
                    ? styles.btnProfileActive
                    : styles.btnProfile
                return (
                  <li key={index}>
                    <div className={styles.viewProfile}>
                      <Button
                        className={activeSlect}
                        onClick={() => selectItem(item)}
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
                {Profile(stateConfirm.itemSelected)?.map(
                  ({ title, value }: any) => {
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
                  }
                )}
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
