const HandleModile = (text: string) => {
  const str1 = text.slice(0, 4)
  const str2 = text.slice(4, 7)
  const str3 = text.slice(7, 10)
  return str1.concat(" " + str2 + " " + str3)
}
export const Profile = [
  {
    title: '',
    value: 'Huỳnh Ngọc Toàn (Bạn)'
  },
  {
    title: 'Giới tính:',
    value: 'Nam'
  },
  {
    title: 'Ngày sinh:',
    value: '24/12/2021'
  },
  {
    title: 'Số điện thoại:',
    value: HandleModile('0903232223')
  },
]
export const Info = [
  {
    title: 'Hình thức khám:',
    value: 'Dịch vụ'
  },
  {
    title: 'Bác sĩ:',
    value: 'Nguyễn Văn A'
  },
  {
    title: 'Chuyên khoa:',
    value: 'Răng Hàm Mặt'
  },
  {
    title: 'Ngày khám:',
    value: '12/12/2022'
  },
  {
    title: 'Giờ khám:',
    value: '07:30'
  },
]