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
      {/* import từ thiên viện */}
      <ExampleComponent text={'helo monday'} />
      {/* chạy styles less */}
      <div className={styles.main}>helo</div>
      {/* chạy antd và css thường */}
      <Button className={css.btnDemo}>huyi </Button>
    </>
  )
}

export default HomeDetail
