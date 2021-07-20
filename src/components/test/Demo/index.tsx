import Container from './../Container'
import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'

interface Props {
  text: string
  funcTest: () => void
  funcLogin: () => void
}

export const Demo: React.FC<Props> = ({ text, funcTest, funcLogin }) => {
  return (
    <Container className={styles.demo}>
      {text}
      <div>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
        <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
      </div>
      <div>
        <Button className={styles.BtnDel} onClick={() => funcLogin()}>
          Đăng nhập
        </Button>
      </div>
    </Container>
  )
}
