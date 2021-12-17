/* eslint-disable react/no-children-prop */
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
import { getSetting, Info, Profile, TITLE, VALUE } from './utils/func'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import * as ac from '@actionStore'

export const ConfirmInfo = (props: ConfirmInfoIF) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const {
    query: { site }
  } = router

  const [state, setstate] = useState<StateConfirm>({
    listPatient: props.listPatient,
    patient: [],
    indexSelect: 0,
    itemSelected: {}
  })

  useEffect(() => {
    setstate((v) => ({
      ...v,
      itemSelected: props.listPatient[0]
    }))
  }, [])

  const selectItem = (item: any) => () => {
    setstate((v) => ({
      ...v,
      itemSelected: item
    }))
    dispatch(ac.selectedPatient(state.itemSelected))
  }

  function confirm(e: any) {
    console.log(e)
    message.success('Click on Yes')
  }

  function cancel(e: any) {
    console.log(e)
    message.error('Click on No')
  }

  const { listPatient, itemSelected } = state

  return (
    <Container className={styles.container}>
      <Row className={styles.rowInfo}>
        <Col xl={24} className={styles.colTitleInfo}>
          <h3 className={styles.titleConfirm}>XÁC NHẬN THÔNG TIN</h3>
        </Col>
        <Col xl={16} className={styles.colInfo}>
          <div className={styles.ProfileBooking}>
            <h4 className={styles.titlePatient}>Hồ sơ đặt khám</h4>
            {props.loading ? (
              <Loading
                component
                minHeight='400px'
                size={40}
                text='Đang tải ...'
              />
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
                  {listPatient?.map((item, index) => {
                    const activeSlect =
                      item.id === itemSelected.id
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
                  <ul className={styles.listItem}>
                    {Profile(itemSelected).map((el, i) => {
                      const t = getSetting(el, TITLE)
                      const v = getSetting(el, VALUE)
                      return (
                        el.visible && (
                          <li key={i}>
                            <p className={styles.cardItem}>
                              <span
                                style={{ color: t.color }}
                                className={cx(styles.title, t.bold, t.under)}
                              >
                                {el.title}
                              </span>
                              <span
                                style={{ color: v.color }}
                                className={cx(styles.value, v.bold, v.under)}
                              >
                                {el.value}
                              </span>
                            </p>
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
                {Object.keys(props.schedule).length < 1 ? (
                  <Loading
                    component
                    minHeight='200px'
                    size={40}
                    text={false}
                    children={
                      <div className={styles.actionLoading}>
                        <p className={styles.txtLoading}>
                          Vui lòng chọn <b>Đặt khám</b> và hoàn thành nhập đủ
                          <b> Thông tin đặt khám</b> <br />
                          để tiếp tục chức năng này !
                        </p>
                        <Button
                          shape='round'
                          type='primary'
                          className={styles.btnRedirect}
                        >
                          <Link href={`/${site}/hinh-thuc-dat-kham`}>
                            <a>Hình thức đặt khám</a>
                          </Link>
                        </Button>
                      </div>
                    }
                  />
                ) : (
                  Info(props.schedule)?.map((el, i) => {
                    const t = getSetting(el, TITLE)
                    const v = getSetting(el, VALUE)
                    return (
                      <li key={i}>
                        <p className={styles.cardItem}>
                          <span
                            style={{ color: t.color }}
                            className={cx(styles.title, t.bold, t.under)}
                          >
                            {el.title}
                          </span>
                          <span
                            style={{ color: v.color }}
                            className={cx(styles.value, v.bold, v.under)}
                          >
                            {el.value}
                          </span>
                        </p>
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
