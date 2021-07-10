// import { ExampleComponent } from '@tntran496/ts-ant-demo'
import Container from '@components/atoms/Container'
import { Button } from 'antd'
import React from 'react'
// import styles from './styles.module.less'

const HomeDetail = () => {
  return (
    <Container>
      <Button type="primary">Button của antd</Button>
      <p>
        cấu hình file env nằm ngoài <br />
        {process.env.API}
      </p>
      {/* <ExampleComponent text="@tntran496/ts-ant-demo" /> */}
    </Container>
  )
}

export default HomeDetail
