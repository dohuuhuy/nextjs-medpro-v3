import * as func from '@utils/func'
import moment from 'moment'
import { ItemInfo, User } from '../common/interface'
import styles from './../styles.module.less'


export const Profile = (item: User) => {
  console.log('name :>> ', !!item?.fullname);
  return [
      {
        visible:!!item?.fullname,
        title: 'Họ và tên: ',
        value: item?.fullname,
        status: true,
        sort: 0,
        setting:{
          title: {
            bold: true,
            color: "red",
            underline: true
          },
          value: {
            bold: true,
            color: "red",
            underline: true
          }
        }
      },
      {
        visible:!!item?.sex,
        title: 'Giới tính: ',
        value: func.changeSex(item?.sex),
        status: true,
        sort: 5,
        setting:{
          titleBold: true,
          valueBold: true
        }
      },
      {
        visible:!!item?.birthdate,
        title: 'Ngày sinh: ',
        value: item?.birthdate,
        status: false,
        sort: 2
      },
      {
        visible:!!item?.mobile,
        title: 'Số điện thoại: ',
        value: func.HandleModile(item?.mobile),
        status: true,
        sort: 3
      },
      {
        visible:!!item?.profession?.name,
        title: "Nghề nghiệp: ",
        value: item?.profession?.name,
        status: true,
        sort: 4
      },
      {
        visible:!!item?.fullAddress,
        title: "Địa chỉ: ",
        value: item?.fullAddress,
        status: true,
        sort: 1
      }
    ] as ItemInfo[]

}



export const Info = (item: any) => [
  {
    title: 'Hình thức khám: ',
    value: item?.service?.selected?.name
  },
  {
    title: 'Bác sĩ: ',
    value: item?.doctor?.selected?.name
  },
  {
    title: 'Chuyên khoa: ',
    value: item?.subject?.selected?.name
  },
  {
    title: 'Ngày khám: ',
    value: moment(item?.time?.selected?.chonNgay?.date).format("DD/MM/YYYY")
  },
  {
    title: 'Giờ khám: ',
    value: `${item?.time?.selected?.chonGio?.startTime} - ${item?.time?.selected?.chonGio?.endTime}`
  },
]

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
export const VALUE =  'value'
