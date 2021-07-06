import { ExampleComponent } from '@tntran496/ts-ant-demo'
import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'

const HomeDetail = () => {
  return (
    <div className={styles.btn}>
      <ExampleComponent text="@tntran496/ts-ant-demo" />
      <Button type="primary">Button của antd</Button>
      <p>
        cấu hình file env nằm ngoài <br />
        {process.env.API}
      </p>
    </div>
  )
}

export default HomeDetail
