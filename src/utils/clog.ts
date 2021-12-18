import { get } from 'lodash'
import { openToast } from './Notification'

const size = 'font-size: 0.813rem;'

interface Log {
  name: string
  child: any
  type: 'error' | 'warning' | 'info' | 'success' | 0 | 1 | 2 | 3
}

export const huyi = ({ name, child, type }: Log) => {
  const e = get(child, 'response.data', '')

  switch (type) {
    case 0:
    case 'error':
      if (e) {
        console.info(
          `%cLỗi - ${name} :>> `,
          `color: #dc3545; ${size}`,
          `
          - StatusCode :>>  ${e.statusCode || 404},
          - Message :>> ${e.message},
        `
        )
        console.log(
          `- %cChi tiết lỗi ${name} :>> `,
          `color: #dc3545; ${size}`,
          e
        )
      } else {
        console.info(`%cLỗi - ${name} :>> `, `color: #dc3545; ${size}`, child)
      }

      openToast({
        type: 'error',
        message: 'Thông báo lỗi ' + e.statusCode,
        description: e.message,
        duration: 20
      })

      break
    case 1:
    case 'warning':
      return console.info(
        `%cCảnh báo - ${name} :>> `,
        `color: #ffc107; ${size}`,
        child
      )

    case 2:
    case 'info':
      return console.info(
        `%cThông tin - ${name} :>> `,
        `color: #007bff; ${size}`,
        child
      )

    case 3:
    case 'success':
      return console.log(
        `%cThành công - ${name} :>> `,
        `color:#28a745 ; ${size}`,
        child
      )

    default:
      return console.log(
        `%cKết quả - ${name} :>> `,
        `color:#6f42c1 ; ${size}`,
        child
      )
  }
}
