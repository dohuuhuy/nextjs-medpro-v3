import { notification } from 'antd'
import { ArgsProps } from 'antd/lib/notification'

export const openToast = ({
  type,
  message,
  description,
  duration,
}: ArgsProps) => {
  const setDuration = () => {
    if (duration) {
      return duration
    } else {
      if ((type = 'error')) return 7
      if ((type = 'warning')) return 4
      if ((type = 'info')) return 9
      if ((type = 'success')) return 6
      return 3
    }
  }

  notification.open({
    message,
    description,
    type,
    duration: Number(setDuration()),
  })
}
