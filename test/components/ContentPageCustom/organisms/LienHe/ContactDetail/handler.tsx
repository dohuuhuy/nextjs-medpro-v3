import * as yup from 'yup'

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const schemaContact = yup.object().shape({
  fullname: yup
    .string()
    .trim('Vui lòng không nhập khoảng trắng !')
    .strict(true)
    .required('Vui lòng nhập họ tên !'),
  email: yup.string().email('Vui nhập đúng định dạng !'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Số điện thoại không dúng định dạng !')
    .typeError('Vui lòng nhập số !')
    .required('Vui lòng nhập số điện thoại !'),
  problem: yup.string().required('Vui lòng chọn vấn đề!'),
  content: yup.string().required('Vui lòng nhập nội dung !')
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
      enter: ({ name, place, type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'email',
      type: 'email',
      label: 'Địa chỉ Email',
      place: 'Vui lòng nhập email..',
      require: false,
      enter: ({ name, place, type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'phone',
      type: 'number',
      label: 'Số điện thoại',
      place: 'Vui lòng nhập số điện thoại',
      require: true,
      enter: ({ name, place, type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'problem',
      type: 'select',
      label: 'Chọn vấn đề',
      place: 'Vấn đề của bạn',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)}>{option}</select>
      }
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Nhập nội dung cần trợ giúp',
      place: 'Vui lòng nhập nội dung cần hỗ trợ...',
      require: true,
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

const opt = [
  {
    code: '',
    label: 'Chọn vấn đề'
  },
  {
    code: 'chuyenmon',
    label: 'Vấn đề chuyên môn'
  },
  {
    code: 'kythuat',
    label: 'Vấn đề về kỹ thuật'
  },
  {
    code: 'khac',
    label: 'Vấn đề khác'
  }
]

const option = opt.map(({ code, label }) => {
  return (
    <option key={code} value={code}>
      {label}
    </option>
  )
})
