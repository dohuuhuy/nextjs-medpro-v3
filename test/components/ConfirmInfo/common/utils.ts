import * as func from '@utils/func'
import moment from 'moment'
import styles from './../styles.module.less'
import { ItemInfo, User } from './interface'

export const Profile = (item: User) => {
  return [
    {
      visible: !!item?.fullname,
      title: 'Họ và tên: ',
      value: item?.fullname,
      status: true,
      sort: 0,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 1
        },
        value: {
          bold: 1,
          color: 'red',
          underline: 0
        }
      }
    },
    {
      visible: item?.sex !== null,
      title: 'Giới tính: ',
      value: func.changeSex(item?.sex),
      status: true,
      sort: 5,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 0,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      visible: !!item?.birthdate,
      title: 'Ngày sinh: ',
      value: item?.birthdate,
      status: false,
      sort: 2,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 0,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      visible: !!item?.mobile,
      title: 'Số điện thoại: ',
      value: item?.mobile && func.HandleModile(item?.mobile),
      status: true,
      sort: 3,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      visible: !!item?.profession?.name,
      title: 'Nghề nghiệp: ',
      value: item?.profession?.name,
      status: true,
      sort: 4,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 0,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      visible: !!item?.fullAddress,
      title: 'Địa chỉ: ',
      value: item?.fullAddress,
      status: true,
      sort: 1,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 0,
          color: 'black',
          underline: 0
        }
      }
    }
  ] as ItemInfo[]
}

const getIndexKey = (item: any, key: any) => {
  return Object.keys(item).indexOf(key)
}

export const Info = (item: any) => {
  return [
    {
      sort: getIndexKey(item, KEY_SCHEDULE.SERVICE),
      visible: true,
      title: 'Hình thức khám: ',
      value: item?.service?.selected?.name,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      sort: getIndexKey(item, KEY_SCHEDULE.DOCTOR),
      visible: !!item?.doctor?.selected?.name,
      title: 'Bác sĩ: ',
      value: item?.doctor?.selected?.name,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      sort: getIndexKey(item, KEY_SCHEDULE.SUBJECT),
      visible: !!item?.subject?.selected?.name,
      title: 'Chuyên khoa: ',
      value: item?.subject?.selected?.name,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      sort: getIndexKey(item, KEY_SCHEDULE.ROOM),
      visible: !!item?.room?.selected?.name,
      title: 'Khu vực/phòng khám: ',
      value: item?.room?.selected?.name,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'black',
          underline: 0
        }
      }
    },
    {
      sort: getIndexKey(item, KEY_SCHEDULE.TIME),
      visible: !!item?.time?.selected?.chonNgay,
      title: 'Ngày khám: ',
      value: moment(item?.time?.selected?.chonNgay?.date).format('DD/MM/YYYY'),
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'green',
          underline: 0
        }
      }
    },
    {
      sort: getIndexKey(item, KEY_SCHEDULE.TIME) + 1,
      visible: !!item?.time?.selected?.chonGio,
      title: 'Giờ khám: ',
      value: `${item?.time?.selected?.chonGio?.startTime} ${
        item?.time?.selected?.chonGio?.endTime
          ? '- ' + item?.time?.selected?.chonGio?.endTime
          : ''
      }`,
      setting: {
        title: {
          bold: 0,
          color: 'black',
          underline: 0
        },
        value: {
          bold: 1,
          color: 'green',
          underline: 0
        }
      }
    }
  ] as ItemInfo[]
}

export const getSetting = (item: ItemInfo, key: 'title' | 'value') => {
  const bold = item?.setting?.[key]?.bold ? styles.bold : null
  const color = item?.setting?.[key]?.color
  const under = item?.setting?.[key]?.underline ? styles.underline : null
  return {
    bold,
    color,
    under
  }
}

export const TITLE = 'title'
export const VALUE = 'value'

export const KEY_SCHEDULE: KEY_SCHEDULE = {
  SUBJECT: 'subject',
  SERVICE: 'service',
  DOCTOR: 'doctor',
  ROOM: 'room',
  TIME: 'time'
}

export type KEY_SCHEDULE_IF = {
  [key in keyof typeof KEY_SCHEDULE]: string
}

export interface KEY_SCHEDULE {
  SUBJECT: string
  SERVICE: string
  DOCTOR: string
  ROOM: string
  TIME: string
}
