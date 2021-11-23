import { validateFullname } from "./validate";
import {z} from 'zod'

export const dayList = [{ id: 0, name: "Ngày" }];
for (let i = 1; i <= 31; i++) {
  dayList.push({ id: i, name: i.toString() });
}

export const monthList = [{ id: 0, name: "Tháng" }];
for (let i = 1; i <= 12; i++) {
  monthList.push({ id: i, name: i.toString() });
}

export const yearList = [{ id: 0, name: "Năm" }];
for (let i = new Date().getFullYear(); i >= 1900; i--) {
  yearList.push({ id: i, name: i.toString() });
}

const day = dayList.map(({ id, name }) => {
  return (
    <option key={id} value={id}>
      {name}
    </option>
  )
})

const month = monthList.map(({ id, name }) => {
  return (
    <option key={id} value={id}>
      {name}
    </option>
  )
})

const year = yearList.map(({ id, name }) => {
  return (
    <option key={id} value={id}>
      {name}
    </option>
  )
})

const genderList = [
  {
    id: "sex0",
    value: "Chọn giới tính"
  },
  {
    id: "sex1",
    value: "Nam"
  },
  {
    id: "sex2",
    value: "Nữ"
  }
]

const gender = genderList.map(({ id, value}) => {
  return (
    <option key={id} value={value}>
      {value}
    </option>
  )
})

const RegMobile = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const RegEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const schemaContact = z.object({
  fullname : z.string(),
  birthday: z.string(),
  mobile: z.string().regex(RegMobile, "Không đúng định dạng"),
  sex: z.string(),
  email: z.string().regex(RegEmail,"Email không đúng định dạng !")
})

export const handleFormPatient = ( register : any) => {
  return [
    {
      name: 'fullname',
      type: 'text',
      label: 'Họ và tên',
      place: 'Vui lòng nhập họ và tên',
      require: true,
      enter: ({ name, place, type }: any) => {
        return <input {...register(name, {
          validate : validateFullname,

        })} placeholder={place} type={type} />
      }
    },
    {
      name: 'birthday',
      label: 'Ngày tháng năm sinh',
      type: "date",
      require: true,
      enter: ({ name, type }: any) => {
        return (
          // <div>
          //   <select {...register(name)}>{day}</select>
          //   <select {...register(name)}>{month}</select>
          //   <select {...register(name)}>{year}</select>
          // </div>
          <input {...register(name)} type={type} />
        )
      }
    },
    {
      name: 'mobile',
      type: 'text',
      label: 'Số điện thoại',
      place: 'Nhập số điện thoại',
      require: true,
      enter: ({ name, place, type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'sex',
      label: 'Giới tính',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)} defaultChecked={"sex0"}>{gender}</select>
      }
    },
    {
      name: 'career',
      label: 'Nghề nghiệp',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)} defaultChecked={"sex0"}>{gender}</select>
      }
    },
    {
      name: 'CMND',
      type: "number",
      label: 'Số CMND/Passport',
      place: 'Nhập số CMND',
      require: false,
      enter: ({ name, place , type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'email',
      type: "text",
      label: 'Địa chỉ Email',
      place: 'Nhập địa chỉ email để nhận phiếu khám',
      require: true,
      enter: ({ name, place , type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
    {
      name: 'nation',
      label: 'Dân tộc',
      require: false,
      enter: ({ name }: any) => {
        return <select {...register(name)}>{gender}</select>
      }
    },
    {
      name: 'city',
      label: 'Tỉnh / Thành',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)}>{gender}</select>
      }
    },
    {
      name: 'district',
      label: 'Quận / Huyện',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)}>{gender}</select>
      }
    },
    {
      name: 'ward',
      label: 'Phường / Xã',
      require: true,
      enter: ({ name }: any) => {
        return <select {...register(name)}>{gender}</select>
      }
    },
    {
      name: 'address',
      type: "text",
      label: 'Địa chỉ',
      place: "Nhập địa chỉ",
      require: true,
      enter: ({ name, place, type }: any) => {
        return <input {...register(name)} placeholder={place} type={type} />
      }
    },
  ]
}

export const error = (element: any, errors: any) => {
  return (
    <p>
      <em style={{ color: 'red' }}>{(errors as any)[element]?.message}</em>
    </p>
  )
}
