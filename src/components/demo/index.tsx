import { Button } from 'antd'
import styles from './styles.module.less'

export default function Demo() {
  return (
    <div className={styles.btn}>
      <Button type="primary">Button</Button>
      <p>
        cấu hình file env nằm ngoài <br />
        {process.env.API}
      </p>
    </div>
  )
}
