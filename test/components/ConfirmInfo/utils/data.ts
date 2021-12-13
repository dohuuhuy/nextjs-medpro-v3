import * as func from '@utils/func'

export const Profile = (item: any) => [
  {
    title: '',
    value: item.fullname
  },
  {
    title: 'Giới tính: ',
    value: func.changeSex(item.sex)
  },
  {
    title: 'Ngày sinh: ',
    value: item.birthdate
  },
  {
    title: 'Số điện thoại: ',
    value: func.HandleModile(item.mobile)
  }
]



export const Info = [
  {
    title: 'Hình thức khám: ',
    value: 'Dịch vụ'
  },
  {
    title: 'Bác sĩ: ',
    value: 'Nguyễn Văn A'
  },
  {
    title: 'Chuyên khoa: ',
    value: 'Răng Hàm Mặt'
  },
  {
    title: 'Ngày khám: ',
    value: '12/12/2022'
  },
  {
    title: 'Giờ khám: ',
    value: '07:30'
  },
]
