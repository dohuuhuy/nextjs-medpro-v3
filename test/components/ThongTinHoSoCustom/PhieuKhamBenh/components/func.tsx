import { Personal } from '../../index'
import moment from 'moment'

export const HandleFilter = (Props: Personal) => {
  Props.listBooking.map((e) => {
    e.bookings.map((item) => {
      console.log("props ", item.partner.name)
    })
  })
  return Props?.listBooking.map((e) => [
    `${e?.surname} ${e?.name}`,
    e?.bookings.map((item) => [
      {
        key: '',
        value: item?.partner?.name
      },
      {
        key: 'Chuyên khoa',
        value: `: ${item?.subject?.name}`
      },
      {
        key: 'Dịch vụ',
        value: `: ${item?.service?.name}`
      },
      {
        key: 'Ngày khám',
        value: `: ${moment(item?.date).format("DD/MM/YYYY")}`
      },
      {
        key: 'Giờ khám dự kiến',
        value: `: ${moment(item?.date).format("hh:mm")}`
      },
      {
        key: '',
        value: item?.description
      }
    ])
  ])
}
