import { Button } from 'antd'
import React from 'react'
import styles from './style.module.less'
import css from './style.module.css'
import { ExampleComponent } from '@tntran496/ts-ant-demo'
// import './../../../../node_modules/@tntran496/ts-ant-demo/libs/index.css'
import '@tntran496/ts-ant-demo/libs/index.css'

const HomeDetail = () => {
  return (
    <>
      <ExampleComponent text={'helo monday'} />
      <div className={styles.main}>helo</div>
      <Button className={css.btnDemo}>huyi </Button>
    </>
  )
}

export default HomeDetail
