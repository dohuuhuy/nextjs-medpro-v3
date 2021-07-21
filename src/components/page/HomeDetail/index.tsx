import { deleteColor, getDemo } from '@actionStore/rootAction'
import Container from '@components/test/Container'
import { openInNewTab } from '@components/atoms/openInNewTab'
import { DemoState } from '@store/interface'
import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
import { Demo } from '@n17dccn172/booking-libs'

const HomeDetail = () => {
  const dispatch = useDispatch()

  const nameColor: any = useSelector(
    (state: { DemoReducer: DemoState }) => state.DemoReducer.nameColor
  )

  const handerFuncTest = (name: string) => {
    alert(name)
  }

  return (
    <Container
      style={{
        paddingTop: '160px',
        textAlign: 'center'
      }}
    >
      <h1>helo</h1>

      <Demo
        text={'viết bằng typescript function và có sử dụng module.less'}
        funcTest={() => handerFuncTest('huyi')}
        funcLogin={() =>
          openInNewTab('https://id-v121.medpro.com.vn/check-phone')
        }
      />

      <Button
        disabled={nameColor === 'ghost'}
        type={nameColor}
        onClick={() => dispatch(getDemo({ nameColor: 'ghost' }))}
      >
        Button của antd
      </Button>

      <Button
        disabled={nameColor === 'primary'}
        className={styles.BtnDel}
        onClick={() => dispatch(deleteColor())}
      >
        xóa color
      </Button>

      <div style={{ paddingTop: '2rem' }}>
        <Button
          className={styles.BtnDel}
          onClick={() =>
            openInNewTab('https://id-v121.medpro.com.vn/check-phone')
          }
        >
          Đăng nhập
        </Button>
      </div>
      <a href='tel:1900-2115'>1900-2115</a>

      <div> {process.env.ENV + '   helo'} </div>
    </Container>
  )
}

export default HomeDetail
