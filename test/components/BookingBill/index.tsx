import { CloseOutlined } from '@ant-design/icons'
import { Button, Col, Row, Spin } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import moment from 'moment'
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
}

export const BookingBill = (props: BookingBillIF) => {
  const dispatch = useDispatch()
  const { bill } = props

  let bookingTimeBig

  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  if (!bill) return null

  const { bookingInfo: info } = bill
  const {
    id,
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
    dispatch(props.cancelBooking({ id: id }))
    handleToggleModal()
  }

  return (
    <Container className={styles.containerBill}>
      <Row className={styles.rowDetailBooking}>
        <Col span={24} className={styles.colDetailBooking}>
          <div className={styles.billPrint}>
            <h3 className={styles.titleBill}>PHIẾU KHÁM BỆNH</h3>

            {status === 1 && <CardDownload />}

            <section className={styles.billInfo}>
              <CustomLine top={true} />

              {/* thông tin của bệnh viện */}
              <div className={styles.hospital}>
                <figure>
                  <img src={hos.image} alt='' />
                </figure>
                <p className={styles.nameHos}>{hos?.name}</p>
                <p className={styles.addressHos}>{hos?.address}</p>
              </div>

              {typeCode(info.displayCodeBooking)}

              {statusBill(info)}

              {/* nếu phiếu chưa được thanh toán hoặc thanh toán hộ thì xuất hiện thanh toán lại */}
              {(status === 0 || status === 6) && canRepayment && (
                <div className={styles.thanhToanLai}>
                  <p className={styles.txtUnpay}>
                    Vui lòng THANH TOÁN để hoàn tất <br /> đăng ký phiếu khám
                    bệnh
                  </p>
                  <button className={cx(styles.button)}>Thanh toán lại</button>
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

              {/* Sô thứ tự, thời gian dự kiến hoặc đợi */}
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
                          ? 'Giờ tiếp nhận dự kiến'
                          : 'Số thứ tự tiếp nhận'}
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

              {/* Phần lưu ý cuối */}
              {(bookingNote || bookingNote) && (
                <p className={styles.attention}>Lưu ý:</p>
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
                  <p>Được phát triển bởi </p>
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
                  Hủy phiếu
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
