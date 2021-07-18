import { notification } from 'antd'
import { ArgsProps } from 'antd/lib/notification'
// import styles from './styles.module.less'

export const Notification = ({
  type = 'success',
  message,
  description,
}: ArgsProps) => {
  notification[type]({
    message,
    description,
  })
}
