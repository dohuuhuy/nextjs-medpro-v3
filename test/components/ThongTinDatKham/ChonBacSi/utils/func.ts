// import { Medthods } from '../../utils/interface'
import { listDoctor } from './components/array'

export const HandleFilter = () => {
  return listDoctor.map(({ name, sex, special, fee }: any) => [
    {
      key: '',
      value: name,
      icon: ''
    },
    {
      key: 'Giới tính:',
      value: sex ? 'Nam' : 'Nữ',
      icon: ''
    },
    {
      key: 'Chuyên khoa:',
      value: special,
      icon: ''
    },
    {
      key: 'Giá khám',
      value: fee + 'đ',
      icon: ''
    }
  ])
}
