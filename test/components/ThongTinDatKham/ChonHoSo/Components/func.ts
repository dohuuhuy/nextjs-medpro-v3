import { Medthods } from '../../utils/interface'
export const HandleFilter = (Props: Medthods) => {
  console.log("listPateint ", Props?.listPatient)
  return (
    Props?.listPatient.map((item: any) => [
      {
        id: '1',
        Key: '',
        Value: item.fullname
      },
      {
        id: '2',
        Key: 'Ngày sinh',
        Value: item.birthdate
      },
      {
        id: '3',
        Key: 'Số điện thoại',
        Value: item.mobile
      },
      {
        id: '4',
        Key: 'Giới tính',
        Value: item.sex ? 'Nam' : 'Nữ'
      },
      {
        id: '5',
        Key: 'Dân tộc',
        Value: item.nation.name
      },
      {
        id: '6',
        Key: 'Địa chỉ',
        Value: item.fullAddress
      }
    ])
  )
}