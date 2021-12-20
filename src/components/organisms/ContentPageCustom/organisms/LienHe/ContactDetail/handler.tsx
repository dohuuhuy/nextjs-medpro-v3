// import * as yup from 'yup'
import { z } from 'zod'

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const schemaContact = z.object({
  fullname: z.string().nonempty('Vui lòng nhập họ tên !'),
  email: z.string().email('Vui nhập đúng định dạng email !'),
  phone: z
    .string()
    .nonempty('Vui lòng nhập số điện thoại !')
    .regex(phoneRegExp, 'Số điện thoại không dúng định dạng !'),
  problem: z.string().nonempty('Vui lòng chọn vấn đề !'),
  content: z.string().nonempty('Vui lòng nhập nội dung cần trợ giúp !')
})
// export const schemaContact = z.object().shape({
//   fullname: zod
//     .string()
//     .trim('Vui lòng không nhập khoảng trắng !')
//     .strict(true)
//     .required('Vui lòng nhập họ tên !'),
//   email: z.string().email('Vui nhập đúng định dạng !'),
//   phone: yup
//     .string()
//     .matches(phoneRegExp, 'Số điện thoại không dúng định dạng !')
//     .typeError('Vui lòng nhập số !')
//     .required('Vui lòng nhập số điện thoại !'),
//   problem: yup.string().required('Vui lòng chọn vấn đề!'),
//   content: yup.string().required('Vui lòng nhập nội dung !')
// })

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
      placeholder: 'Vui lòng nhập họ và tên',
      require: true,
      autoComplete: 'off',
      enter: (props) => <input {...props} />
    },
    {
      name: 'email',
      type: 'email',
      label: 'Địa chỉ Email',
      placeholder: 'Vui lòng nhập email..',
      require: false,
      autoComplete: 'off',
      enter: (props) => <input {...props} />
    },
    {
      name: 'phone',
      type: 'number',
      label: 'Số điện thoại',
      placeholder: 'Vui lòng nhập số điện thoại',
      require: true,
      autoComplete: 'off',
      enter: (props) => <input {...props} />
    },
    {
      name: 'problem',
      type: 'select',
      label: 'Chọn vấn đề',
      placeholder: 'Vấn đề của bạn',
      require: true,
      autoComplete: 'off',
      enter: ({ name }: any) => {
        return <select {...register(name)}>{option}</select>
      }
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Nhập nội dung cần trợ giúp',
      placeholder: 'Vui lòng nhập nội dung cần hỗ trợ...',
      require: true,
      maxLength: 500,
      rows: 5,
      autoComplete: 'off',
      enter: (props) => <textarea {...props} />
    }
  ] as FormInput[]
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

export interface FormInput {
  name: string
  type: string
  label: string
  placeholder: string
  require: boolean
  autoComplete?: string
  enter: (props: FormInput) => JSX.Element
  maxLength?: any
  rows?: any
}
