
// import { Medthods } from '../../utils/interface'
import { listDoctor } from './array'

export const HandleFilter = () => {
  return listDoctor.map(({ name, sex, special, fee }: any) => [
    {
      key: '',
      value: name,
      // icon: <UserOutlined />
    },
    {
      key: 'Giới tính:',
      value: sex ? 'Nam' : 'Nữ',
      // icon: <CalendarOutlined />
    },
    {
      key: 'Chuyên khoa:',
      value: special,
      // icon: <PhoneOutlined />
    },
    {
      key: 'Giới tính',
      value: fee ? 'Nam' : 'Nữ',
      // icon: <TeamOutlined />
    }
  ])
}