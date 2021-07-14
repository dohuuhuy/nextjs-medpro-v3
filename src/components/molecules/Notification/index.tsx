import { notification } from 'antd'
// import styles from './styles.module.less'

export type Noti = {
  type: type
  message: string
  description?: string
}

type type = 'success' | 'info' | 'warning' | 'error'

export const Notification = ({ type, message, description }: Noti) => {
  notification[type]({
    message,
    description,
  })
}
