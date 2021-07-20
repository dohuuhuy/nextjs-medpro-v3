import React from 'react'
import styles from './styles.module.less'

interface Props {
  text: string
  funcTest: any
}

export const Demo: React.FC<Props> = ({ text, funcTest }) => {
  return (
    <div className={styles.demo}>
      {' '}
      {text}
      <button onClick={() => funcTest()}>thử nghiệm truyền func</button>
    </div>
  )
}
