import * as func from '@utils/func'
import moment from 'moment'
import { ItemInfo, User } from '../common/interface'
import styles from './../styles.module.less'

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
      value: func.HandleModile(item?.mobile),
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

export const Info = (item: any) => {
  return [
    {
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
      visible: true,
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
      visible: true,
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
      visible: true,
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
      visible: true,
      title: 'Giờ khám: ',
      value: `${item?.time?.selected?.chonGio?.startTime} - ${item?.time?.selected?.chonGio?.endTime}`,
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
