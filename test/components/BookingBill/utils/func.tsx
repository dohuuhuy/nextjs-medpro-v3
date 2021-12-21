import { isEmpty, isNull, isUndefined } from 'lodash'
import moment from 'moment'
import React from 'react'
import { CustomLine } from '../common/CustomLine'
import styles from './../styles.module.less'
import { ItemListBill } from './interface'

export const listItemBooking = (info: any) => {
  if (!info) return []

  let bookingTime
  const { date, waitingConfirmDate, status } = info

  if (date) {
    bookingTime = moment(date).format('HH:mm')
  } else {
    bookingTime = waitingConfirmDate
  }

  const addonServices = info.addonServices.map((item: any) => {
    return {
      disable: 1,
      title: item.name + ' :',
      value: item.priceText,
      setting: {
        title: {
          color: '',
          bold: 0,
          underline: 1
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    }
  })

  return [
    {
      disable: check(info?.insuranceCode),
      title: 'Hình thức khám :',
      value: info?.insuranceCode ? ' Có BHYT' : ' Không có BHYT',
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    {
      disable: check(info?.service?.name),
      title: 'Dịch vụ :',
      value: info?.service?.name,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: 0,
          underline: false
        }
      }
    },
    {
      color: '',
      disable: check(info?.room?.name),
      title: 'Khu vực / Phòng khám :',
      value: info?.room?.name,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: 0,
          underline: false
        }
      }
    },
    {
      color: '',
      disable: check(info?.subject?.name),
      title: 'Chuyên khoa:',
      value: info?.subject?.name,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    {
      color: '',
      disable: check(info?.doctor?.name),
      title: 'Bác sĩ:',
      value: info?.doctor?.name,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    {
      disable: check(info?.date),
      title: 'Ngày khám',
      value: moment(info?.date).format('DD/MM/YYYY'),
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: status === 1 ? '#3bb54a' : '',
          bold: true,
          underline: false
        }
      }
    },
    {
      disable: check(bookingTime),
      title:
        info?.partnerId === 'trungvuong'
          ? 'Giờ tiếp nhận dự kiến :'
          : 'Giờ khám dự kiến :',
      value: bookingTime,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: status === 1 ? '#3bb54a' : '',
          bold: true,
          underline: false
        }
      }
    },
    {
      disable: check(info?.service?.priceText),
      title: 'Phí khám:',
      value: info?.service?.priceText,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: true
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    ...addonServices,
    {
      disable: true,
      dash: <CustomLine />,
      title: '',
      value: '',
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    {
      color: '',
      disable: check(info?.patient),
      title: 'Bệnh nhân:',
      value: `${info?.patient?.surname} ${info?.patient?.name}`,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    },
    {
      disable: check(info?.patient),
      title: 'Giới tính:',
      value: info?.patient?.sex ? 'Nam' : 'Nữ',
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: false,
          underline: false
        }
      }
    },
    {
      disable: check(info?.patient?.birthdate),
      title: 'Năm sinh:',
      value: info?.patient?.birthdate,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: false,
          underline: false
        }
      }
    },
    {
      disable: check(info?.patient?.city.name),
      title: 'Tỉnh/thành:',
      value: info?.patient?.city.name,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: false,
          underline: false
        }
      }
    },
    {
      disable: check(info?.bookingCode)
        ? info?.displayCodeBooking.type === 'barcode'
          ? false
          : true
        : false,
      title: 'Mã phiếu:',
      value: info?.bookingCode,
      setting: {
        title: {
          color: '',
          bold: true,
          underline: false
        },
        value: {
          color: '',
          bold: true,
          underline: false
        }
      }
    }
  ] as ItemListBill[]
}

export const getSetting = (item: any, key: 'title' | 'value') => {
  const bold = item?.setting?.[key]?.bold ? styles.bold : null
  const color = item?.setting?.[key]?.color
  const under = item?.setting?.[key]?.underline ? styles.underline : null
  return {
    bold,
    color,
    under
  }
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
    return false
  } else return true
}
