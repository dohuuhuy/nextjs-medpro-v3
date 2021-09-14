import * as yup from 'yup'

export const handleProfile = (register: any) => {
  return [
    {
      name: 'fullname',
      type: 'text',
      label: 'Họ và tên (có dấu) ',
      place: 'Ví dụ: Nguyễn Văn Bảo',
      require: true,
      enter: ({ name, place, type, require }: any) => {
        return (
          <input
            {...register(name)}
            placeholder={place}
            type={type}
            required={require}
          />
        )
      }
    },
    {
      name: 'birthday',
      type: 'select',
      label: 'Ngày tháng năm sinh',
      place: 'Chọn ngày sinh',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'mobile',
      type: 'number',
      label: 'Số điện thoại',
      place: 'Nhập số điện thoại',
      require: true,
      enter: ({ name, place, type, require }: any) => {
        return (
          <input
            {...register(name)}
            placeholder={place}
            type={type}
            required={require}
          />
        )
      }
    },
    {
      name: 'sex',
      type: 'select',
      label: 'Giới tính',
      place: 'Chọn giới tính',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'job',
      type: 'select',
      label: 'Nghề nghiệp',
      place: 'Chọn nghề nghiệp',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'CMND',
      type: 'number',
      label: 'Số CMND/Passport',
      place: 'Nhập số CMND',
      require: true,
      enter: ({ name, place, type, require }: any) => {
        return (
          <input
            {...register(name)}
            placeholder={place}
            type={type}
            required={require}
          />
        )
      }
    },
    {
      name: 'email',
      type: 'text',
      label: 'Địa chỉ Email',
      place: 'Nhập địa chỉ email để nhận phiếu khám',
      require: true,
      enter: ({ name, place, type, require }: any) => {
        return (
          <input
            {...register(name)}
            placeholder={place}
            type={type}
            required={require}
          />
        )
      }
    },
    {
      name: 'nation',
      type: 'select',
      label: 'Dân tộc',
      place: 'Chọn dân tộc',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'city',
      type: 'select',
      label: 'Tỉnh / Thành',
      place: 'Chọn tỉnh thành',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'district',
      type: 'select',
      label: 'Quận / Huyện',
      place: 'Chọn quận huyện',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'ward',
      type: 'select',
      label: 'Phường / Xã',
      place: 'Chọn phường xã',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='1'>Nam</option>
            <option value='0'>Nữ</option>
          </select>
        )
      }
    },
    {
      name: 'address',
      type: 'text',
      label: 'Địa chỉ',
      place: 'Nhập địa chỉ',
      require: true,
      enter: ({ name, place, type, require }: any) => {
        return (
          <input
            {...register(name)}
            placeholder={place}
            type={type}
            required={require}
          />
        )
      }
    }
  ]
}

export const schemaProfile = yup.object().shape({
  fullname: yup.string().required('không được trống'),
  email: yup.string().email().required('không được trống'),
  mobile: yup.number().required('không được trống'),
  city: yup.string().required('không được trống'),
  district: yup.string().required('không được trống'),
  ward: yup.string().required('không được trống'),
  address: yup.string().required('không được trống')
})

export const error = (element: any, errors: any) => {
  return (
    <p>
      <em style={{ color: 'red' }}>{(errors as any)[element]?.message}</em>
    </p>
  )
}
