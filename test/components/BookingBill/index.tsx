import { CloseOutlined } from '@ant-design/icons'
import { Button, Col, Row, Spin } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from './../Container'
import { CardDownload } from './common/CardDownload'
import { CustomLine } from './common/CustomLine'
import { ModalCancel } from './common/ModalCancel'
import { statusBill, typeCode } from './common/typeCode'
import styles from './styles.module.less'
import { TITLE, VALUE } from './utils/contanst'
import { check, getSetting, listItemBooking } from './utils/func'

export interface BookingBillIF {
  bill: any
  cancelBooking: any
  onAddScheduleFromBill: any
}

export const BookingBill = (props: BookingBillIF) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { bill } = props

  let bookingTimeBig

  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  if (!bill) return null

  const { bookingInfo: info } = bill

  if (!info) return null

  const {
    id,
    partnerId,
    partner: hos,
    status,
    canRepayment,
    awaitMessage,
    sequenceNumber,
    date,
    bookingNote,
    checkInRoom: { description }
  } = info

  if (date) {
    bookingTimeBig = moment(date).format('HH:mm')
  } else {
    bookingTimeBig = ''
  }

  const onOkeCancelBill = () => {
    dispatch(props.cancelBooking({ id, partnerId }))
    handleToggleModal()
  }

  const onThanhToanLai = () => {
    router.push(`/${partnerId}/xac-nhan-thong-tin`)
    dispatch(props.onAddScheduleFromBill(info))
  }

  const logo = `https://resource-testing.medpro.com.vn/static/images/${partnerId}/web/header_logo.svg?t=37461.93270345496`

  return (
    <Container className={styles.containerBill}>
      <Row className={styles.rowDetailBooking}>
        <Col span={24} className={styles.colDetailBooking}>
          <div className={styles.billPrint}>
            <h3 className={styles.titleBill}>PHI???U KH??M B???NH</h3>

            {status === 1 && <CardDownload />}

            <section className={styles.billInfo}>
              <CustomLine top={true} />

              {/* th??ng tin c???a b???nh vi???n */}
              <div className={styles.hospital}>
                <figure>
                  <img src={logo} alt='' />
                </figure>
                <p className={styles.nameHos}>{hos?.name}</p>
                <p className={styles.addressHos}>{hos?.address}</p>
              </div>

              {typeCode(info.displayCodeBooking)}

              {statusBill(info)}

              {/* n???u phi???u ch??a ???????c thanh to??n ho???c thanh to??n h??? th?? xu???t hi???n thanh to??n l???i */}
              {(status === 0 || status === 6) && canRepayment && (
                <div className={styles.thanhToanLai}>
                  <p className={styles.txtUnpay}>
                    Vui l??ng THANH TO??N ????? ho??n t???t <br /> ????ng k?? phi???u kh??m
                    b???nh
                  </p>
                  <button
                    className={cx(styles.button)}
                    onClick={onThanhToanLai}
                  >
                    Thanh to??n l???i
                  </button>
                </div>
              )}

              <div className={styles.totalMessage}>
                <p className={styles.totalPaymentMessage}>
                  {info.totalPaymentMessage}
                </p>
                <p className={styles.totalMessageExtra}>
                  {info.totalMessageExtra}
                </p>
              </div>

              <CustomLine />

              {/* S?? th??? t???, th???i gian d??? ki???n ho???c ?????i */}
              {status !== 0 && (
                <div className={styles.numberBill}>
                  {check(awaitMessage) ? (
                    <div className={styles.awaitMessage}>
                      <p>{awaitMessage}</p>
                      <Spin size='large' />
                    </div>
                  ) : (
                    <div className={styles.number}>
                      <p
                        className={cx(
                          styles.text,
                          status === -2 ? styles.gray : styles.number
                        )}
                      >
                        {check(sequenceNumber)
                          ? 'Gi??? ti???p nh???n d??? ki???n'
                          : 'S??? th??? t??? ti???p nh???n'}
                      </p>
                      <p
                        className={cx(
                          styles.num,
                          status === -2 ? styles.gray : styles.number
                        )}
                      >
                        {sequenceNumber || bookingTimeBig}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <ul className={styles.listItemBooking}>
                {listItemBooking(info).map((item) => {
                  const t = getSetting(item, TITLE)
                  const v = getSetting(item, VALUE)
                  return (
                    item.disable && (
                      <li key={uniqueId()}>
                        {item.dash ? (
                          item.dash
                        ) : (
                          <p className={styles.itemBooking}>
                            <span
                              style={{ color: t.color }}
                              className={cx(styles.title, t.bold, t.under)}
                            >
                              {item.title}
                            </span>
                            <span
                              style={{ color: v.color }}
                              className={cx(styles.value, v.bold, v.under)}
                            >
                              {item.value}
                            </span>
                          </p>
                        )}
                      </li>
                    )
                  )
                })}
              </ul>

              <CustomLine />

              {/* Ph???n l??u ?? cu???i */}
              {(bookingNote || bookingNote) && (
                <p className={styles.attention}>L??u ??:</p>
              )}
              <div className={styles.note}>
                <p>{description}</p>
              </div>
              {bookingNote && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: bookingNote
                  }}
                />
              )}
              <div className={styles.organization}>
                <a
                  href='https://medpro.vn'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p>???????c ph??t tri???n b???i </p>
                  <img
                    src='https://resource-testing.medpro.com.vn/static/images/medpro/web/header_logo.svg'
                    alt=''
                  />
                </a>
              </div>
              <CustomLine bottom={true} />
            </section>
            {status === 1 && (
              <div className={styles.cancelBill}>
                <Button
                  className={styles.btnCancel}
                  onClick={handleToggleModal}
                >
                  <CloseOutlined />
                  H???y phi???u
                </Button>

                <ModalCancel
                  showModal={showModal}
                  onOke={onOkeCancelBill}
                  onCancel={handleToggleModal}
                />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
