import Container from '@components/atoms/Container'
import { getDemo } from '@componentStore/demo/demo.action'
import { DemoState } from '@componentStore/demo/demo.interface'
import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import styles from './styles.module.less'

const HomeDetail = () => {
  const dispatch = useDispatch()
  const getDemos = (name: any) => dispatch(getDemo(name))
  const DemoReducer: DemoState = useSelector(
    (state: { DemoReducer: DemoState }) => state.DemoReducer,
  )

  const { nameColor }: any = DemoReducer

  return (
    <Container
      style={{
        paddingTop: '2rem',
        textAlign: 'center',
      }}
    >
      <Button type={nameColor || 'primary'} onClick={() => getDemos('ghost')}>
        Button của antd
      </Button>
      <p>
        cấu hình file env nằm ngoài <br />
        {process.env.API}
      </p>
    </Container>
  )
}

export default HomeDetail
