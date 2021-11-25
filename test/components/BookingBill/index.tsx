/* eslint-disable @next/next/no-img-element */
import { CloseOutlined } from '@ant-design/icons'
import Container from '@componentsTest/Container'
import { Button, Col, Row } from 'antd'
import cx from 'classnames'
import { uniqueId } from 'lodash'
import moment from 'moment'
import React, { useState } from 'react'
import Barcode from 'react-barcode'
import { CustomLine } from './components/CustomLine'
import { ModalCancel } from './components/Modal_Cancel'
import styles from './styles.module.less'
import { check, listItemBooking } from './utils/func'

const QRCode = require('qrcode.react')

export const BookingBill = ({ bill }: any) => {
  let bookingTimeBig

  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }

  if (!bill) return null

  const { bookingInfo: info } = bill
  const {
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

  return (
    <Container className={styles.containerBill}>
      <Row className={styles.rowDetailBooking}>
        <Col xl={24} lg={24} xs={24} className={styles.colDetailBooking}>
          <div className={styles.billPrint}>
            <h3>PHIẾU KHÁM BỆNH</h3>
            <section className={styles.billInfo}>
              <CustomLine top />

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

              <CustomLine />

              {/* Sô thứ tự, thời gian dự kiến hoặc đợi */}
              {status !== 0 && (
                <div className={styles.numberBill}>
                  {!check(awaitMessage) ? (
                    <div className={styles.awaitMessage}>
                      <p>{awaitMessage}</p>
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
                          ? 'Số thứ tự tiếp nhận'
                          : 'Giờ tiếp nhận dự kiến'}
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
                {listItemBooking(info).map(
                  ({ title, value, dash, disable, color }: any) => {
                    return (
                      !disable && (
                        <li key={uniqueId()}>
                          {dash ? (
                            dash
                          ) : (
                            <p
                              className={styles.itemBooking}
                              style={{ color: color }}
                            >
                              <span> {title}</span>
                              <span>{value}</span>
                            </p>
                          )}
                        </li>
                      )
                    )
                  }
                )}
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
              <CustomLine bottom />
            </section>
            <div className={styles.cancelBill}>
              <Button className={styles.btnCancel} onClick={handleModal}>
                <CloseOutlined />
                Hủy phiếu
              </Button>
              <ModalCancel showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const typeCode = (e: any) => {
  if (!e.value) return null

  let code
  switch (e?.type) {
    case 'barcode':
      code = (
        <Barcode
          value={e.value}
          format='CODE128'
          height={50}
          width={1}
          fontSize={14}
        />
      )
      break
    case 'qrcode':
      code = <QRCode fgColor='#000000' size={90} value={e.value} />
      break
    default:
      break
  }

  return (
    <div className={styles.barcode}>
      <p className={styles.title}>{e.title}</p>
      {code}
    </div>
  )
}

const statusBill = (info: any) => {
  const { status } = info

  const classTimeNote = cx({
    [styles.statusSuccess]: status === 1,
    [styles.statusDanger]: status === 0 || status === 6,
    [styles.statusDisable]: status === -2
  })
  return (
    <div className={cx(styles.status, classTimeNote)}>{info.description}</div>
  )
}
