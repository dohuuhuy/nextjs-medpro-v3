import { CloseCircleOutlined } from '@ant-design/icons'
import Loading from '@componentsTest/Loading'
import { Button, Col, message, Popconfirm, Row } from 'antd'
import cx from 'classnames'
import { get } from 'lodash'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { CardFee } from '../CardFee'
import Container from '../Container'
import { Icon } from '../Icon'
import { ConfirmInfoIF, StateConfirm } from './common/interface'
import styles from './styles.module.less'
import { getSetting, Info, Profile, TITLE, VALUE } from './utils/data'

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

  const selectItem = (item: any) => () => {
    setstateConfirm((v) => ({
      ...v,
      itemSelected: item
    }))
  }

  function confirm(e: any) {
    console.log(e)
    message.success('Click on Yes')
  }

  function cancel(e: any) {
    console.log(e)
    message.error('Click on No')
  }
  return (
    <Container className={styles.container}>
      <Row className={styles.rowInfo}>
        <h3>XÁC NHẬN THÔNG TIN</h3>
        <Col xl={16} className={styles.colInfo}>
          <div className={styles.ProfileBooking}>
            <h4 className={styles.titlePatient}>Hồ sơ đặt khám</h4>
            {props.loading ? (
              <Loading component minHeight='15' size={25} text='Đang tải ...' />
            ) : (
              <div>
                <Slider {...settings} className={styles.sliderPatient}>
                  <div className={styles.viewProfile}>
                    <Button
                      className={styles.btnProfile}
                      icon={<Icon name='plus' size='20' />}
                    />
                    <p>Tạo hồ sơ</p>
                  </div>
                  {stateConfirm.listPatient?.map((item, index) => {
                    const activeSlect =
                      item.id === stateConfirm.itemSelected.id
                        ? styles.btnProfileActive
                        : styles.btnProfile
                    return (
                      <div className={styles.viewProfile} key={index}>
                        <Button
                          className={activeSlect}
                          onClick={selectItem(item)}
                        >
                          <Icon name='bacsinam' size='55' />
                        </Button>

                        <p>{get(item, 'fullname')}</p>
                      </div>
                    )
                  })}
                </Slider>
                <div className={styles.cardComplete}>
                  {/* styles.cardInComplete */}
                  <ul className={styles.listItem}>
                    {Profile(stateConfirm.itemSelected)
                      ?.sort((a, b) => a.sort - b.sort)
                      .map((item, i) => {
                        return (
                          item.status &&
                          item.visible && (
                            <li key={i}>
                              <div className={styles.cardItem}>
                                <p className={styles.contentItem}>
                                  <span
                                    style={{
                                      color: getSetting(item, TITLE).color
                                    }}
                                    className={cx(
                                      styles.title,
                                      getSetting(item, TITLE).bold,
                                      getSetting(item, TITLE).under
                                    )}
                                  >
                                    {item.title}
                                  </span>
                                  <span
                                    style={{
                                      color: getSetting(item, VALUE).color
                                    }}
                                    className={cx(
                                      styles.value,
                                      getSetting(item, VALUE).bold,
                                      getSetting(item, VALUE).under
                                    )}
                                  >
                                    {item.value} {/* biến ở đây */}
                                  </span>
                                </p>
                              </div>
                            </li>
                          )
                        )
                      })}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className={styles.InfoBooking}>
            <h4 className={styles.titleInfoBooking}>Thông tin đặt khám</h4>
            <div className={styles.cardInfo}>
              <ul className={styles.listItem}>
                {props.schedule.length < 1 ? (
                  <Loading
                    component
                    minHeight='15'
                    size={25}
                    text='Đang tải ...'
                  />
                ) : (
                  Info(props.schedule)?.map(({ title, value }, i) => {
                    return (
                      <li key={i}>
                        <div className={styles.cardItem}>
                          <p className={styles.contentInfo}>
                            <span className={styles.title}>{title}</span>
                            <span className={styles.value}>{value}</span>
                          </p>
                        </div>
                      </li>
                    )
                  })
                )}
              </ul>
              <div className={styles.btnClose}>
                <Popconfirm
                  title='Are you sure to delete this task?'
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText='Yes'
                  cancelText='No'
                >
                  <CloseCircleOutlined />
                </Popconfirm>
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

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
}
