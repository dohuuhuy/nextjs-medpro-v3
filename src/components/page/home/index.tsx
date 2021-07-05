import { Button } from 'antd'
import React from 'react'
import styles from './style.module.less'
import { ExampleComponent } from '@tntran496/ts-ant-demo'

const HomeDetail = () => {
  return (
    <>
      <ExampleComponent text={'helo nhe alo alo hihi'} />
      <div className={styles.main}>helo</div>
      <Button>huyi l</Button>
    </>
  )
}

export default HomeDetail
