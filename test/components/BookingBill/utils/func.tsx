import { isEmpty, isNull, isUndefined } from 'lodash'
import moment from 'moment'
import React from 'react'
import { CustomLine } from '../common/CustomLine'

export const listItemBooking = (info: any) => {
  if (!info) return []

  let bookingTime
  const { date, waitingConfirmDate, status } = info

  if (date) {
    bookingTime = moment(date).format('HH:mm')
  } else {
    bookingTime = waitingConfirmDate
  }

  return [
    {
      color: '',
      disable: check(info?.insuranceCode),
      title: 'Hình thức khám :',
      value: info?.insuranceCode ? ' Có BHYT' : ' Không có BHYT'
    },
    {
      color: '',
      disable: check(info?.service?.name),
      title: 'Dịch vụ :',
      value: info?.service?.name
    },
    {
      color: '',
      disable: check(info?.room?.name),
      title: 'Khu vực - Phòng khám :',
      value: info?.room?.name
    },
    {
      color: '',
      disable: check(info?.subject?.name),
      title: 'Chuyên khoa:',
      value: info?.subject?.name
    },
    {
      color: '',
      disable: check(info?.doctor?.name),
      title: 'Bác sĩ:',
      value: info?.doctor?.name
    },
    {
      color: status === 1 ? '#3bb54a' : '',
      disable: check(info?.date),
      title: 'Ngày khám',
      value: moment(info?.date).format('DD/MM/YYYY')
    },
    {
      color: status === 1 ? '#3bb54a' : '',
      disable: check(bookingTime),
      title:
        info?.partnerId === 'trungvuong'
          ? 'Giờ tiếp nhận dự kiến'
          : 'Giờ khám dự kiến',
      value: bookingTime
    },
    {
      color: '',
      disable: check(info?.service?.priceText),
      title: 'Phí khám:',
      value: info?.service?.priceText
    },
    {
      color: '',
      disable: false,
      dash: <CustomLine />,
      title: '',
      value: ''
    },
    {
      color: '',
      disable: check(info?.patient),
      title: 'Bệnh nhân:',
      value: `${info?.patient?.surname} ${info?.patient?.name}`
    },
    {
      color: '',
      disable: check(info?.patient),
      title: 'Giới tính:',
      value: info?.patient?.sex ? 'Nam' : 'Nữ'
    },
    {
      color: '',
      disable: check(info?.patient?.birthdate),
      title: 'Năm sinh:',
      value: info?.patient?.birthdate
    },
    {
      color: '',
      disable: check(info?.patient?.city.name),
      title: 'Tỉnh/thành:',
      value: info?.patient?.city.name
    },
    {
      color: '',
      disable:
        info?.displayCodeBooking.type === 'barcode' || check(info?.bookingCode),
      title: 'Mã phiếu:',
      value: info?.bookingCode
    }
  ]
}

export const check = (element: any) => {
  if (
    element < 1 ||
    typeof element === 'undefined' ||
    element === 0 ||
    element === ' ' ||
    element === null ||
    element === '' ||
    !element ||
    isEmpty(element) ||
    isNull(element) ||
    isUndefined(element) ||
    element.length < 1
  ) {
    return true
  } else return false
}
