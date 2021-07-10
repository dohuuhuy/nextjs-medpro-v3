import Container from '@components/atoms/Container'
import { getDemo } from '@componentStore/demo/demo.action'
import { DemoState } from '@componentStore/demo/demo.types/demo.interface'
import { getDemo_Params } from '@componentStore/demo/demo.types/demo.params'
import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import styles from './styles.module.less'

const HomeDetail = () => {
  const dispatch = useDispatch()
  const getDemos = ({ nameColor }: getDemo_Params) =>
    dispatch(getDemo({ nameColor } as getDemo_Params))

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
      <Button
        type={nameColor || 'primary'}
        onClick={() => getDemos({ nameColor: 'ghost' })}
      >
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
