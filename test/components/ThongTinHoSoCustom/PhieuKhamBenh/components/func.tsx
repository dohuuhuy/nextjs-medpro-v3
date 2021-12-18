import moment from 'moment'

export const HandleFilter = (Props: any) => {
  return Props?.listBooking.map((e: any) => [
    `${e?.surname} ${e?.name}`,
    e?.bookings.map((item: any) => [
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
        value: `: ${moment(item?.date).format('DD/MM/YYYY')}`
      },
      {
        key: 'Giờ khám dự kiến',
        value: `: ${moment(item?.date).format('hh:mm')}`
      },
      {
        key: '',
        value: item?.description
      }
    ])
  ])
}
