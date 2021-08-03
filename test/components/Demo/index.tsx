import Container from '../Container'
import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'

interface Props {
  text: string
  funcTest: () => void
  funcLogin: () => void
}

export const Demo = ({ text, funcTest, funcLogin }: Props) => {
  const funcTests = () => funcTest()
  const funcLogins = () => funcLogin()
  return (
    <Container className={styles.demo}>
      {text}
      <div>
        <button onClick={funcTests}>thử nghiệm truyền func</button>
      </div>
      <div>
        <Button className={styles.BtnDel} onClick={funcLogins}>
          Đăng nhập
        </Button>
      </div>
    </Container>
  )
}
