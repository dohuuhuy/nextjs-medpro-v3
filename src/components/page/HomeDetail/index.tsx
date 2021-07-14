import { deleteColor, getDemo } from '@actionStore/rootAction'
import Container from '@components/atoms/Container'
import { DemoState } from '@store/interface'
import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
import { Demo } from '@medpro/booking-libs'

const HomeDetail = () => {
  const dispatch = useDispatch()

  const nameColor: any = useSelector(
    (state: { DemoReducer: DemoState }) => state.DemoReducer.nameColor,
  )

  return (
    <Container
      style={{
        paddingTop: '160px',
        textAlign: 'center',
      }}
    >
      <Demo text={'viết bằng typescript function và có sử dụng module.less'} />
      <Button
        disabled={nameColor === 'ghost'}
        type={nameColor}
        onClick={() => dispatch(getDemo({ nameColor: 'ghost' }))}
      >
        Button của antd
      </Button>
      <p>
        cấu hình file env nằm ngoài <br />
        {process.env.API}
      </p>
      <button
        disabled={nameColor === 'primary'}
        className={styles.BtnDel}
        onClick={() => dispatch(deleteColor())}
      >
        xóa color
      </button>
    </Container>
  )
}

export default HomeDetail
