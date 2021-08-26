import React from 'react'

interface Medthods {
  listUser: Item[]
}

interface Item {
  name: string
  listExamination: any[]
}
export const HandleFilter = (Props: Medthods) => {
  return Props?.listUser.map(({ name, listExamination }: Item) => [
    name,
    listExamination.map((item: any) => [
      {
        key: '',
        value: item?.hospital
      },
      {
        key: 'Chuyên khoa: ',
        value: item?.special
      },
      {
        key: 'Dịch vụ: ',
        value: item?.service
      },
      {
        key: 'Ngày khám: ',
        value: item?.day
      },
      {
        key: 'Giờ khám dự kiến: ',
        value: item?.time
      },
      {
        key: '',
        value: item?.type
      }
    ])
  ])
}
