import * as yup from 'yup'

export const schemaContact = yup.object().shape({
  fullname: yup.string().required('không được trống'),
  email: yup.string().email().required('không được trống'),
  phone: yup.number().required('không được trống')
})

export const error = (element: any, errors: any) => {
  return (
    <p>
      <em style={{ color: 'red' }}>{(errors as any)[element]?.message}</em>
    </p>
  )
}

export const handlerListFrom = (register: any) => {
  return [
    {
      name: 'fullname',
      type: 'text',
      label: 'Họ và tên',
      place: 'Vui lòng nhập họ và tên',
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
      type: 'email',
      label: 'Địa chỉ Email',
      place: 'Vui lòng nhập email..',
      require: false,
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
      name: 'phone',
      type: 'number',
      label: 'Số điện thoại',
      place: 'Vui lòng nhập số điện thoại',
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
      name: 'problem',
      type: 'select',
      label: 'Chọn vấn đề',
      place: 'Vấn đề của bạn',
      require: true,
      enter: ({ name, place }: any) => {
        return (
          <select
            {...register(name)}
            style={{ width: '100%' }}
            placeholder={place}
          >
            <option value='cn'>Vấn đề chuyên môn</option>
            <option value='kt'>Vấn đề về kỹ thuật</option>
            <option value='#'>Vấn đề khác</option>
          </select>
        )
      }
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Nhập nội dung cần trợ giúp',
      place: 'Vui lòng nhập nội dung cần hỗ trợ...',
      require: false,
      maxLength: 500,
      rows: 5,
      enter: ({ maxLength, rows, name, place }: any) => {
        return (
          <textarea
            {...register(name)}
            placeholder={place}
            maxLength={maxLength}
            rows={rows}
          />
        )
      }
    }
  ]
}
